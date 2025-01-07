const dayjs = require("dayjs");
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

//Data de nascimento no formato DD/MM/AAAA (Ex.: 25/12/2025)
const birthday = "09/01/2000";

function manipulateBirthDate(date) {
	const bday = dayjs(date, "DD/MM/YYYY");
	const today = dayjs();
	const age = today.diff(bday, "year");
	let nextBday = bday.add(age + 1, "year");

	console.log(`Idade atual: ${age}`);

	console.log(
		`Sua próxima dada de aniversário é: ${nextBday.format("DD/MM/YYYY")}`
	);

	console.log(
		`Faltam ${
			nextBday.diff(today, "day") + 1
		} dias para seu próximo aniversário`
	);
}

manipulateBirthDate(birthday);
