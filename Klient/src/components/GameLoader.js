import {
	AmbientLight,
	AxesHelper,
	GridHelper,
	Vector3,
} from "three"
import Enemy from "./Fields/Enemy.js"
import Wall from "./Fields/Wall.js"
import Treasure from "./Fields/Treasure.js"
import Light from "./Fields/Light.js"
import Plane from "./Fields/Plane.js"
import Player from "./Player"

export default class GameLoader {
	constructor(scene) {
		this.scene = scene;
		this.gameData = null;
		this.player = undefined
		this.bombs = [];
	}

	getGameData() {
		// Gets saved game data from server
		return $.ajax({
			method: "GET",
			url: "http://localhost:5000/load",
			contentType: "json",
		})
	}

	createLevelBasics(createGrid = false, createAxes = false) {
		console.log("Level basics creation");
		this.planeRotation = Math.PI / 2

		// Creates:
		// - floor
		this.floor = new Plane(this.scene)
		this.floor.mesh.position.set(5, 0, 5);
		this.floor.mesh.rotation.set(this.planeRotation, 0, 0)

		// - ambient light
		this.ambientLight = new AmbientLight(0x404040)
		this.scene.add(this.ambientLight);


		// - helpers (grid, axes)
		if (createGrid) {
			this.grid = new GridHelper(10, 10)
			this.grid.position.set(5, 0, 5)
			this.scene.add(this.grid)
		}
		if (createAxes) {
			this.axes = new AxesHelper(1000)
			this.scene.add(this.axes)
		}
	}

	createLevelLayout() {
		console.log("Level content creation, whole game data: ");
		console.log(this.gameData);
		// Creates all level blocks based on data from server (/load)

		this.walls = []
		this.enemies = []
		this.lights = []
		this.treasures = []

		for (let i = 0; i < this.gameData.size; i++) {
			let currGameObject = this.gameData.fieldList[i]

			switch (currGameObject.type) {
				case "wall":
					let wall = new Wall(this.scene);
					wall.mesh.position.set(currGameObject.x + 0.5, currGameObject.y + 0.5, currGameObject.z + 0.5)
					this.walls.push(wall)
					break;

				case "enemy":
					let enemy = new Enemy(this.scene);
					enemy.mesh.position.set(currGameObject.x + 0.5, currGameObject.y + 0.5, currGameObject.z + 0.5)
					this.enemies.push(enemy)
					break;

				case "treasure":
					let treasure = new Treasure(this.scene);
					treasure.mesh.position.set(currGameObject.x + 0.5, currGameObject.y + 0.5, currGameObject.z + 0.5)
					this.treasures.push(treasure)
					break;

				case "light":
					let light = new Light(this.scene);
					light.mesh.position.set(currGameObject.x + 0.5, currGameObject.y + 0.9, currGameObject.z + 0.5)
					this.lights.push(light)
					break;

				default:
					console.log("No filter specified");
					break;
			}
		}
	}

	addPlayer() {
		$.ajax({
			method: "GET",
			url: "http://localhost:5000/newPlayer",
			contentType: "json",
		}).done((data) => {
			if (data != "Brak możliwości dodania gracza") {
				this.player = JSON.parse(data)
				console.log(this.player);
			} else {
				alert(data);
			}
		})
	}
}