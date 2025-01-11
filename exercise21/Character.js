export class Character {
	constructor(name, hp, atk, def) {
		this.name = name;
		this.hp = hp;
		this.atk = atk;
		this.def = def;
	}

	attack(target) {
		let dmg = 0;
		if (target.position === "def") {
			if (this.atk - (target.def + target.shield) > 0) {
				dmg = this.atk - (target.def + target.shield);
			}
		} else {
			if (this.atk - target.def > 0) {
				dmg = this.atk - target.def;
			}
		}
		target.hp = target.hp - dmg > 0 ? target.hp - dmg : 0;
	}
}
