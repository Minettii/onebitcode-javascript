module.exports = class Installment {
	constructor(value, number, situation = "pending") {
		this.value = value;
		this.number = number;
		this.situation = situation;
	}

	// "pending" or "paid"
	changeSituacion(situation) {
		this.situation = situation;
	}
};
