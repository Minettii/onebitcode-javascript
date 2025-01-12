const form = document.querySelector("form");

form.addEventListener("submit", (ev) => {
	ev.preventDefault();
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	try {
		emailIsValid(email);
		passwordIsValid(password);
		alert("Email e senha válidos!");
	} catch (er) {
		console.log(er.message);
	}
});

//xx@xx.xx // char,num,undescore@\w.\w
function emailIsValid(email) {
	const match = email.match(/^[\w]{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/);
	if (!match) {
		throw new Error("Email inválido, use o formato: xx@xx.xx");
	}
}

//1+a, 1+A, 1+num, 1+*, 8+char
function passwordIsValid(password) {
	const matchLower = password.match(/[a-z]+/);
	if (!matchLower) {
		throw new Error(
			"Senha inválida!\nA senha deve possuir pelo menos uma letra minúscula"
		);
	}
	const matchUpper = password.match(/[A-Z]+/);
	if (!matchUpper) {
		throw new Error(
			"Senha inválida!\nA senha deve possuir pelo menos uma letra maiúscula"
		);
	}
	const matchNumber = password.match(/[0-9]+/);
	if (!matchNumber) {
		throw new Error(
			"Senha inválida!\nA senha deve possuir pelo menos um número"
		);
	}
	const matchSpecial = password.match(
		/[!@#$%^&*(),.?":{}|<>_\-\\\/\[\];'~`+=]+/
	);
	if (!matchSpecial) {
		throw new Error(
			"Senha inválida!\nA senha deve possuir pelo menos um caractere especial"
		);
	}
	const matchLength = password.match(/.{8,}/);
	if (!matchLength) {
		throw new Error(
			"Senha inválida!\nA senha deve possuir pelo menos 8 caracteres"
		);
	}
}
