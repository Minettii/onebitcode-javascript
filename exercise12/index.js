let devs = [];
let idTec = 0;

const ulTec = document.getElementById("lista-tecnologias");
const form = document.getElementById("form-cadastro");
const btnAdd = document.getElementById("btn-add");
const nomeDev = document.getElementById("nome");

function removerTec(ev) {
	ev.currentTarget.parentNode.remove();
}

function submitForm(ev) {
	ev.preventDefault();
	let tecList = [];
	for (let i = 0; i <= idTec; i++) {
		if (document.getElementById(`liTec${i}`)) {
			tecList.push({
				nomeTecnologia: document.getElementById(`nomeTec${i}`).value,
				xpTecnologia: document.querySelector(
					`input[name="xp_${i}"]:checked`
				).value,
			});
		}
	}
	devs.push({
		nome: nomeDev.value,
		tecnologias: tecList,
	});

	nomeDev.value = null;
	while (ulTec.firstChild) {
		ulTec.removeChild(ulTec.lastChild);
	}
	idTec = 0;
	console.log(devs);
}

function addTec() {
	let newLi = document.createElement("li");
	newLi.id = "liTec" + idTec;
	let nomeTec = document.createElement("input");
	nomeTec.type = "text";
	nomeTec.id = "nomeTec" + idTec;
	nomeTec.name = "nomeTec" + idTec;
	nomeTec.required = true;
	let labelNome = document.createElement("label");
	labelNome.htmlFor = "nomeTec";
	labelNome.innerText = "Nome da Tecnologia: ";

	//0-2 anos
	let xp1 = document.createElement("input");
	xp1.type = "radio";
	xp1.name = "xp_" + idTec;
	xp1.id = "xp1_" + idTec;
	xp1.value = "0-2";
	xp1.checked = true;
	let labelXp1 = document.createElement("label");
	labelXp1.htmlFor = "xp1_" + idTec;
	labelXp1.innerText = "0-2 anos; ";

	//3-4 anos
	let xp2 = document.createElement("input");
	xp2.type = "radio";
	xp2.name = "xp_" + idTec;
	xp2.id = "xp2_" + idTec;
	xp2.value = "3-4";
	let labelXp2 = document.createElement("label");
	labelXp2.htmlFor = "xp2_" + idTec;
	labelXp2.innerText = "3-4 anos; ";

	//5+ anos
	let xp3 = document.createElement("input");
	xp3.type = "radio";
	xp3.name = "xp_" + idTec;
	xp3.id = "xp3_" + idTec;
	xp3.value = "5+";
	let labelXp3 = document.createElement("label");
	labelXp3.htmlFor = "xp3_" + idTec;
	labelXp3.innerText = "5+ anos   ";
	let labelExp = document.createElement("label");
	labelExp.innerHTML = "  | Tempo de Experiência: ";
	let btnRemover = document.createElement("button");
	btnRemover.type = "button";

	idTec++;

	btnRemover.innerText = "Remover Tecnologia";
	btnRemover.addEventListener("click", removerTec);

	newLi.append(
		labelNome,
		nomeTec,
		labelExp,
		xp1,
		labelXp1,
		xp2,
		labelXp2,
		xp3,
		labelXp3,
		btnRemover
	);
	ulTec.appendChild(newLi);
}

btnAdd.addEventListener("click", addTec);

form.addEventListener("submit", submitForm);
