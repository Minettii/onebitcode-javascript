document.addEventListener("DOMContentLoaded", fetchTransactions);

document.querySelector("#save-btn").onclick = () => {
	addTransaction();
};

function renderTransaction(transaction) {
	const newTransaction = document.createElement("div");
	newTransaction.classList.add("transaction");
	newTransaction.id = transaction.id;

	const name = document.createElement("span");
	name.textContent = transaction.name;
	name.id = `name-${transaction.id}`;

	const value = document.createElement("span");
	value.textContent = transaction.value;
	value.id = `value-${transaction.id}`;
	if (transaction.value >= 0) {
		value.classList.add("positive-value");
	} else {
		value.classList.add("negative-value");
	}

	const editBtn = document.createElement("button");
	editBtn.textContent = "Editar";

	const removeBtn = document.createElement("button");
	removeBtn.textContent = "Remover";

	newTransaction.append(name, value, editBtn, removeBtn);
	document.querySelector("main").append(newTransaction);

	editBtn.addEventListener("click", () => {
		toggleEdit(transaction);
	});
	removeBtn.addEventListener("click", () => {
		deleteTransaction(transaction);
	});
}

async function fetchTransactions() {
	const transactions = await fetch("http://localhost:3000/transactions").then(
		(result) => result.json()
	);
	transactions.forEach((transaction) => renderTransaction(transaction));

	const balance = transactions.reduce(
		(accum, transaction) => accum + parseFloat(transaction.value),
		0
	);
	balanceDiv = document.querySelector("#balance");
	if (balance >= 0) {
		balanceDiv.classList.add("positive-value");
	} else {
		balanceDiv.classList.add("negative-value");
	}
	balanceDiv.textContent = balance;
}

async function addTransaction() {
	if (
		document.querySelector(`#name`).value.trim() &&
		document.querySelector(`#value`).value
	) {
		transactionData = JSON.stringify({
			name: document.querySelector(`#name`).value,
			value: document.querySelector(`#value`).value,
		});

		const response = await fetch("http://localhost:3000/transactions", {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: transactionData,
		});

		renderTransaction(await response.json());
		let balance = parseFloat(
			document.querySelector("#balance").textContent
		);
		balance =
			parseFloat(balance) +
			parseFloat(document.querySelector(`#value`).value);
		if (balance >= 0) {
			document.querySelector("#balance").classList.add("positive-value");
		} else {
			document.querySelector("#balance").classList.add("negative-value");
		}
		document.querySelector("#balance").textContent = balance;
		document.querySelector("form").reset();
	} else {
		alert("Preencha corretamente os campos 'Nome' e 'Valor' ad");
	}
}

function deleteTransaction(transaction) {
	let balance = document.querySelector("#balance").textContent;
	balance = parseFloat(balance) - transaction.value;
	document.querySelector("#balance").textContent = balance;
	if (balance >= 0) {
		balanceDiv.classList.add("positive-value");
	} else {
		balanceDiv.classList.add("negative-value");
	}

	document.getElementById(transaction.id).remove();

	fetch("http://localhost:3000/transactions/" + transaction.id, {
		method: "DELETE",
	});
}

function toggleEdit(transaction) {
	document.querySelector("#name").focus();
	const nameField = document.querySelector("#name");
	const valueField = document.querySelector("#value");
	nameField.value = transaction.name;
	valueField.value = transaction.value;

	document.querySelector("#save-btn").textContent = "Atualizar";
	document.querySelector("#save-btn").onclick = () =>
		editTransaction(transaction);
}

function editTransaction(transaction) {
	if (
		document.querySelector(`#name`).value.trim() &&
		document.querySelector(`#value`).value
	) {
		let balance = parseFloat(
			document.querySelector("#balance").textContent
		);
		balance -= transaction.value;
		balance += parseFloat(document.querySelector("#value").value);
		document.querySelector("#balance").textContent = balance;
		if (balance >= 0) {
			balanceDiv.classList.add("positive-value");
		} else {
			balanceDiv.classList.add("negative-value");
		}
		const id = transaction.id;
		const newName = document.querySelector("#name").value;
		const newValue = document.querySelector("#value").value;
		const transactionObj = JSON.stringify({
			id,
			name: newName,
			value: newValue,
		});
		fetch("http://localhost:3000/transactions/" + id, {
			method: "PUT",
			headers: { "Content-type": "application/json" },
			body: transactionObj,
		});

		document.querySelector(`#name-${id}`).textContent =
			document.querySelector(`#name`).value;
		document.querySelector(`#value-${id}`).textContent =
			document.querySelector(`#value`).value;

		document
			.querySelector("#save-btn")
			.removeEventListener("click", editTransaction);
		document.querySelector("#save-btn").textContent = "Salvar";
		document.querySelector("form").reset();
	} else if (
		!document.querySelector(`#name`).value.trim() ||
		!document.querySelector(`#value`).value
	) {
		alert("Preencha corretamente os campos 'Nome' e 'Valor' ed");
	}
	document.querySelector("#save-btn").type = "submit";
}
