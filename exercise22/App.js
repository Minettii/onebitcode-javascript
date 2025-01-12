const Loan = require("./Loan");
const User = require("./User");

module.exports = class App {
	static #users = [];

	static createUser(email, fullName) {
		if (!App.findUser(email)) {
			App.#users.push(new User(fullName, email));
		}
	}

	static findUser(email) {
		return App.#users.find((user) => user.email === email);
	}

	static transfer(sender, receiver, value) {
		App.findUser(sender)?.account.transfer(
			"send",
			App.findUser(receiver),
			value
		);
		App.findUser(receiver)?.account.transfer(
			"receive",
			App.findUser(sender),
			value
		);
	}

	static deposit(email, value) {
		App.findUser(email)?.account.deposit(value);
	}

	static takeLoan(email, value, numberOfInstallments) {
		App.findUser(email)?.account.takeLoan(value, numberOfInstallments);
	}

	static changeLoanFee(value) {
		Loan.loanFee = value;
	}
};
