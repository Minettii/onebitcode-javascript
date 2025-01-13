//IMC = peso (kg) / altura (m)²
async function calculaIMC(peso, altura) {
	if (isNaN(peso) || isNaN(altura)) {
		return Promise.reject("Peso e Altura devem ser números.");
	}
	return peso / Math.pow(altura, 2);
}

async function exibeIMC(peso, altura) {
	try {
		console.log(`Chamando a promise para peso:${peso} e altura:${altura}`);
		const resultado = await calculaIMC(peso, altura);
		let txt = `IMC: ${resultado} - `;
		if (resultado < 18.5) txt += "Magreza";
		else if (resultado < 25) txt += "Normal";
		else if (resultado < 30) txt += "Sobrepeso";
		else if (resultado < 40) txt += "Obesidade";
		else txt += "Obesidade Grave";
		console.log(txt);
	} catch (er) {
		console.log(er);
	}
}

exibeIMC(71, 1.74);
exibeIMC(48, 1.6);
exibeIMC(71, "texto");
exibeIMC(82, 1.72);
exibeIMC(120, 1.8);
exibeIMC(75, 1.75);
