//IMC = peso (kg) / altura (m)²
function calculaIMC(peso, altura) {
	return new Promise((resolve, reject) => {
		if (isNaN(peso) || isNaN(altura)) {
			reject("Peso e Altura devem ser números.");
		}
		resolve(peso / Math.pow(altura, 2));
	});
}

function exibeIMC(peso, altura) {
	calculaIMC(peso, altura)
		.then((resultado) => {
			let txt = `IMC: ${resultado} - `;
			if (resultado < 18.5) txt += "Magreza";
			else if (resultado < 25) txt += "Normal";
			else if (resultado < 30) txt += "Sobrepeso";
			else if (resultado < 40) txt += "Obesidade";
			else txt += "Obesidade Grave";
			console.log(txt);
		})
		.catch((motivo) => {
			console.log(motivo);
		})
		.finally(() => {
			console.log("Promise finalizada.");
		});
	console.log(`Chamando a promise para peso:${peso} e altura:${altura}`);
}

exibeIMC(71, 1.74);
exibeIMC(48, 1.6);
exibeIMC(71, "texto");
exibeIMC(82, 1.72);
exibeIMC(120, 1.8);
exibeIMC(75, 1.75);
