const dayjs = require("dayjs");
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

//Data de nascimento no formato DD/MM/AAAA (Ex.: 25/12/2025)
const birthday = "08/01/2000";

function manipulateBirthDate(date) {
	const bday = dayjs(date, "DD/MM/YYYY");
	const today = dayjs();
	let nextBday =
		today.diff(bday.set("year", today.year()), "day") > 0
			? bday.set("year", today.year() + 1)
			: bday.set("year", today.year());

	if (
		today.diff(bday.set("year", today.year()), "day") == 0 &&
		today.date() == bday.date()
	) {
		nextBday = bday.set("year", today.year() + 1);
	}

	console.log(`Idade atual: ${today.diff(bday, "year")}`);

	console.log(
		`Sua próxima dada de aniversário é: ${nextBday.format("DD/MM/YYYY")}`
	);

	console.log(
		`Faltam ${nextBday
			.add(1, "day", true)
			.diff(today, "day")} dias para seu próximo aniversário`
	);
}

manipulateBirthDate(birthday);
