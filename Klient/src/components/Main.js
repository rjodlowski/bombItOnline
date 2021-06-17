import {
	Scene,
	Vector3,
} from "three";
import Renderer from "./Renderer"
import Camera from "./Camera"
import GameLoader from "./GameLoader"
import Player from "./Player"
import Bomb from "./Fields/Bomb";
import Stats from 'three/examples/jsm/libs/stats.module.js';
import Keyboard from "./Keyboard";
import KeyboardConfig from "./KeyboardConfig";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Main {
	constructor(container) {
		this.container = container;
		this.scene = new Scene();
		this.renderer = new Renderer(this.scene, this.container);

		this.camera = new Camera(this.renderer.threeRenderer);
		let boardCenterVect = new Vector3(5, 0, 5);

		// OrbitControls
		// this.controls = new OrbitControls(this.camera.threeCamera, this.renderer.threeRenderer.domElement);
		// this.controls.target = boardCenterVect
		// this.camera.threeCamera.rotation.y += 90

		this.camera.threeCamera.position.set(5, 10, 7);
		this.camera.threeCamera.lookAt(boardCenterVect)

		// Stats
		this.stats = new Stats()
		this.stats.showPanel(0)
		document.body.appendChild(this.stats.dom)

		this.game = new GameLoader(this.scene);
		this.game.getGameData().done((data) => {
			// Render a level
			this.game.gameData = JSON.parse(data);
			this.game.gameData.players = [];
			this.game.createLevelBasics(true, true)
			this.game.createLevelLayout();

			// Add player to the game
			this.game.addPlayer().done((data) => {
				if (data != "Brak możliwości dodania gracza") {
					this.game.playerData = JSON.parse(data)
					this.game.gameData.players.push(this.game.playerData);

					this.game.materializePlayer();
					this.keyboard = new Keyboard(window);

					// Wait for another player to join the game
					// then create it and start the game
					this.waitforPlayer();
				} else {
					// console.log(data);
				}
			})
		})

		this.render();
	}

	render() {
		this.stats.begin()

		this.renderer.render(this.scene, this.camera.threeCamera);
		this.playerMove();
		this.checkPlayerMove();
		this.bombsUpdate();

		this.stats.end();

		requestAnimationFrame(this.render.bind(this));
	}

	//#region Render functions
	playerMove() {
		// Enables player movement

		if (this.game.gameStarted) {
			let playerPos = this.game.player.mesh.position
			if (KeyboardConfig.moveLeft) {
				this.game.player.mesh.lookAt(
					playerPos.x - 10,
					playerPos.y,
					playerPos.z
				);
				this.game.player.mesh.translateZ(0.02)
			}
			if (KeyboardConfig.moveRight) {
				this.game.player.mesh.lookAt(
					playerPos.x + 10,
					playerPos.y,
					playerPos.z
				);
				this.game.player.mesh.translateZ(0.02)
			}
			if (KeyboardConfig.moveForward) {
				this.game.player.mesh.lookAt(
					playerPos.x,
					playerPos.y,
					playerPos.z - 10
				);
				this.game.player.mesh.translateZ(0.02)
			}
			if (KeyboardConfig.moveBack) {
				this.game.player.mesh.lookAt(
					playerPos.x,
					playerPos.y,
					playerPos.z + 10
				);
				this.game.player.mesh.translateZ(0.02)
			}
		}
		// red - X
		// green - Y
		// blue - Z
	}

	checkPlayerMove() {
		// Detects when local player's position changes and updates it on the server

		if (this.game.gameStarted) {
			let playerPos = this.game.player.mesh.position;

			if (
				Math.floor(playerPos.x) != this.game.player.playerData.x ||
				Math.floor(playerPos.z) != this.game.player.playerData.z
			) {
				this.game.player.playerData.x = Math.floor(this.game.player.mesh.position.x)
				this.game.player.playerData.z = Math.floor(this.game.player.mesh.position.z)

				$.ajax({
					method: "GET",
					url: "http://localhost:5000/playerMove",
					contentType: "json",
					data: {
						playerType: this.game.player.playerData.playerType,
						playerX: this.game.player.playerData.x,
						playerZ: this.game.player.playerData.z,
					}
				}).done((data) => {
					// console.log("Position update successful!");
					console.log(data);
					// console.log(JSON.parse(data));
				})
			}
		}
	}

	bombsUpdate() {
		// Bombs update - growing and explosion
		if (this.game.gameStarted) {
			if (this.game.bombs.length > 0) {
				for (let i = 0; i < this.game.bombs.length; i++) {
					if (this.game.bombs[i].timePrimed < this.game.bombs[i].primeTime) {
						this.game.bombs[i].grow()
					} else {
						console.log(this.game.bombs);
						let a = this.game.bombs[i].explode();
						this.game.bombs.splice(i, 1);
						console.log(this.game.bombs);

						// console.log("Main return");
						// console.log(a);

						if (a != undefined) {
							this.endGame(a)
						}
					}

				}
			}
		}
	}
	//#endregion End of render functions

	//#region Other game functions
	waitforPlayer() {
		// Awaits for next player to join the game
		// When next player joins, starts the game

		this.playerIndex = this.game.playerData.playerType

		this.checkNextPlayerIn = setInterval(() => {
			$.ajax({
				method: "GET",
				url: "http://localhost:5000/awaitPlayer",
				contentType: "json",
				data: {
					playerIndex: this.game.playerData.playerType,
				},
			}).done((data) => {
				console.log(data);
				if (data != "Brak drugiego gracza") {
					// Add new player, break interval
					console.log("New player added");
					console.log(JSON.parse(data));
					this.game.enemyPlayerData = JSON.parse(data);
					this.game.enemyPlayer = new Player(this.scene, this.game.enemyPlayerData)
					this.addPlayerActions()

					clearInterval(this.checkNextPlayerIn);

					// Start the game 
					this.startGameUpdateInterval()
				}
			})
		}, 500);
	}

	startGameUpdateInterval() {
		// Starts game update interval

		this.game.gameStarted = true;

		this.gameUpdateInterval = setInterval(() => {
			console.log("game update ajax");

			$.ajax({
				method: "GET",
				url: "http://localhost:5000/update",
			}).done((data) => {
				this.game.gameTable = JSON.parse(data);
				this.updateGame();
			})

		}, 500);
	}

	updateGame() {
		// Updates game state based on a table from server

		for (let z = 1; z < 9; z++) {
			for (let x = 1; x < 9; x++) {
				let fieldType = this.game.gameTable[z][x]

				switch (fieldType) {
					case 0:
						// Ignore - empty field
						break;

					case 1:
						// Ignore - Indestructible wall
						break;

					case 2:
						// Ignore - Obstacle
						break;

					case 3:
						// Bomb

						// if no bomb on this position in game  
						if (this.game.bombs.findIndex(e => e.bombPosition.equals(new Vector3(x, 0, z))) == -1) {
							let bomb = new Bomb(this.scene, this.game, this.game.bombId, new Vector3(x, 0, z))
							this.game.bombs.push(bomb);
							this.game.bombId++;
							// console.log("Bomb placed ingame");
							// console.log(this.game.bombs);
						}
						break;

					case 4:
						// Player 1
						if (this.game.player.playerData.playerType != "first") {
							this.game.enemyPlayer.mesh.position.set(
								x + 0.5,
								0.5,
								z + 0.5
							)
						}

						break;

					case 5:
						// Player 2
						if (this.game.player.playerData.playerType != "second") {
							this.game.enemyPlayer.mesh.position.set(
								x + 0.5,
								0.5,
								z + 0.5
							)
						}

						break;

					default:
						console.log("Unknown field");
						break;
				}
			}
		}
	}

	addPlayerActions() {
		// Adds an ability for the local player to place bombs - that's it for now

		window.onkeydown = (key) => {
			if (key.which == 32) {
				console.log("Space clicked");

				let playerWhoPlacedBombFound = this.game.bombs.findIndex(x => x.playerType === this.game.player.playerData.playerType)
				console.log(this.game.player.playerData.playerType);
				console.log(playerWhoPlacedBombFound);

				if (playerWhoPlacedBombFound == -1) {
					$.ajax({
						method: "GET",
						url: "http://localhost:5000/placeBomb",
						contentType: "json",
						data: {
							playerType: this.game.player.playerData.playerType,
							positionX: Math.floor(this.game.player.mesh.position.x),
							positionZ: Math.floor(this.game.player.mesh.position.z)
						}
					}).done((data) => {
						// Target log
						console.log(data);

						// Test log
						// console.log(JSON.parse(data));
					})
				}
			}
		}
	}

	endGame(destroyedPlayerType) {
		console.log("Game end");
		console.log(destroyedPlayerType);

		clearInterval(this.gameUpdateInterval);

		console.log("Player data:");
		console.log(this.game.player.playerData.playerType);
		console.log(this.game.enemyPlayer.playerData.playerType);

		if (destroyedPlayerType === this.game.player.playerData.playerType) {
			alert("You lose!")
		} else if (destroyedPlayerType === this.game.enemyPlayer.playerData.playerType) {
			alert("You win!")
		}

		this.scene.remove(this.game.enemyPlayer.mesh);
		this.scene.remove(this.game.player.mesh);

		this.keyboard.removeEventListeners();
		window.onkeydown = null;

		this.game.gameStarted = false;
	}
	//#endregion End of other game functions
}
