const Installment = require("./Installment");

module.exports = class Loan {
	static #loanFee = 1.03;
	constructor(value, numberOfInstallments, date = new Date()) {
		this.value = value;
		this.date = date;
		this.installments = [];
		for (let i = 1; i <= numberOfInstallments; i++) {
			this.installments.push(
				new Installment(
					(value * Loan.#loanFee) / numberOfInstallments,
					i
				)
			);
		}
	}

	static get loanFee() {
		return Loan.#loanFee;
	}

	static set loanFee(newPercentage) {
		Loan.#loanFee = 1 + newPercentage / 100;
	}
};
