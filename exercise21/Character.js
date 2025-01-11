export class Character {
	constructor(name, hp, atk, def) {
		this.name = name;
		this.hp = hp;
		this.atk = atk;
		this.def = def;
	}

	attack(target) {
		let dmg = 0;
		if (this.atk - target.def > 0) {
			dmg = this.atk - target.def;
		}
		target.hp = target.hp - dmg > 0 ? target.hp - dmg : 0;
	}
}
