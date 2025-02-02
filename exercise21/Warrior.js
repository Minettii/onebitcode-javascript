import { Character } from "./Character.js";

export class Warrior extends Character {
	constructor(name, hp, atk, def, shield) {
		super(name, hp, atk, def);
		this.shield = shield;
		this.position = "atk";
	}

	attack(target) {
		if (this.position === "atk") {
			let dmg = 0;
			if (this.atk - target.def > 0) {
				dmg = this.atk - target.def;
			}
			target.hp = target.hp - dmg > 0 ? target.hp - dmg : 0;
		}
	}

	changePosition() {
		switch (this.position) {
			case "atk":
				this.position = "def";
				this.def += this.shield;
				break;
			case "def":
				this.position = "atk";
				this.def -= this.shield;
				break;
		}
	}
}
