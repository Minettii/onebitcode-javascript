module.exports = class Tranfer {
	constructor(sender, receiver, value, date = new Date()) {
		this.sender = sender;
		this.receiver = receiver;
		this.value = value;
		this.date = date;
	}
};
