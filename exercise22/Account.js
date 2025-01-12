const Deposit = require("./Deposit");
const Loan = require("./Loan");
const Tranfer = require("./Transfer");

module.exports = class Account {
	#balance = 0;
	constructor(user) {
		this.user = user;
		this.deposits = [];
		this.loans = [];
		this.transfers = [];
	}

	get balance() {
		return this.#balance;
	}

	deposit(value) {
		this.#balance += value;
		this.deposits.push(new Deposit(value));
	}

	takeLoan(value, numberOfInstallments) {
		this.#balance += value;
		this.loans.push(new Loan(value, numberOfInstallments));
	}

	transfer(action, target, value) {
		if (action === "send") {
			this.transfers.push(new Tranfer(this.user, target, value));
			this.#balance -= value;
		} else if (action === "receive") {
			this.transfers.push(new Tranfer(target, this.user, value));
			this.#balance += value;
		}
	}
};
