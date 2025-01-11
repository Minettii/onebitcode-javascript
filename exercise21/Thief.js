import { Character } from "./Character.js";

export class Thief extends Character {
	attack(target) {
		let dmg = 0;
		if ((this.atk - target.def) * 2 > 0) {
			dmg = (this.atk - target.def) * 2;
		}
		target.hp = target.hp - dmg > 0 ? target.hp - dmg : 0;
	}
}
