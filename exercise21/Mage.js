import { Character } from "./Character.js";

export class Mage extends Character {
	constructor(name, hp, atk, def, mp) {
		super(name, hp, atk, def);
		this.mp = mp;
	}

	attack(target) {
		let dmg = 0;
		if (target.position === "def") {
			if (this.atk + this.mp - (target.def + target.shield) > 0) {
				dmg = this.atk + this.mp - (target.def + target.shield);
			}
		} else {
			if (this.atk + this.mp - target.def > 0) {
				dmg = this.atk + this.mp - target.def;
			}
		}
		target.hp = target.hp - dmg > 0 ? target.hp - dmg : 0;
	}

	heal(target) {
		target.hp += this.mp * 2;
	}
}
