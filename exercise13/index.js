let squaresPlayed = 0;
let player1 = {};
let player2 = {};

const roundDetails = document.getElementById("round-details");
const result = document.getElementById("result");

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", startGame);

const squares = document.querySelectorAll('button[class="square"]');
squares.forEach(function (square) {
	square.addEventListener("click", checkGame);
	square.classList.add("disabled");
});

function startGame() {
	player1 = { name: "", squares: [] };
	player2 = { name: "", squares: [] };
	squaresPlayed = 0;

	const name1 = document.getElementById("name1");
	player1.name = name1.value;
	if (name1.value === "") {
		player1.name = "Jogador 1";
		name1.value = "Jogador 1";
	}
	name1.disabled = true;
	name1.classList.add("disabled");

	const name2 = document.getElementById("name2");
	player2.name = name2.value;
	if (!name2.value) {
		player2.name = "Jogador 2";
		name2.value = "Jogador 2";
	}
	name2.disabled = true;
	name2.classList.add("disabled");

	startBtn.classList.add("hidden");

	squares.forEach(function (square) {
		if (square.classList.contains("disabled")) {
			square.classList.remove("disabled");
		}
		if (square.classList.contains("highlight")) {
			square.classList.remove("highlight");
		}
		square.disabled = false;
		square.innerText = "";
	});
	result.innerText = "";
	roundDetails.innerText = `Turno de: ${player1.name}`;
}

function checkGame(ev) {
	let square = ev.currentTarget;
	squaresPlayed++;
	let player;
	let win = false;
	if (squaresPlayed % 2 !== 0) {
		player = player1;
		square.innerText = "X";
	} else {
		player = player2;
		square.innerText = "O";
	}
	let value = square.dataset.value;
	player.squares.push(parseInt(value));
	roundDetails.innerText =
		squaresPlayed % 2 === 0
			? `Turno de: ${player1.name}`
			: `Turno de: ${player2.name}`;

	square.disabled = true;

	if (
		player.squares.includes(1) &&
		player.squares.includes(2) &&
		player.squares.includes(3)
	) {
		document.getElementById("square1").classList.add("highlight");
		document.getElementById("square2").classList.add("highlight");
		document.getElementById("square3").classList.add("highlight");
		win = true;
	} else if (
		player.squares.includes(4) &&
		player.squares.includes(5) &&
		player.squares.includes(6)
	) {
		document.getElementById("square4").classList.add("highlight");
		document.getElementById("square5").classList.add("highlight");
		document.getElementById("square6").classList.add("highlight");
		win = true;
	} else if (
		player.squares.includes(7) &&
		player.squares.includes(8) &&
		player.squares.includes(9)
	) {
		document.getElementById("square7").classList.add("highlight");
		document.getElementById("square8").classList.add("highlight");
		document.getElementById("square9").classList.add("highlight");
		win = true;
	} else if (
		player.squares.includes(1) &&
		player.squares.includes(4) &&
		player.squares.includes(7)
	) {
		document.getElementById("square1").classList.add("highlight");
		document.getElementById("square4").classList.add("highlight");
		document.getElementById("square7").classList.add("highlight");
		win = true;
	} else if (
		player.squares.includes(2) &&
		player.squares.includes(5) &&
		player.squares.includes(8)
	) {
		document.getElementById("square2").classList.add("highlight");
		document.getElementById("square5").classList.add("highlight");
		document.getElementById("square8").classList.add("highlight");
		win = true;
	} else if (
		player.squares.includes(3) &&
		player.squares.includes(6) &&
		player.squares.includes(9)
	) {
		document.getElementById("square3").classList.add("highlight");
		document.getElementById("square6").classList.add("highlight");
		document.getElementById("square9").classList.add("highlight");
		win = true;
	} else if (
		player.squares.includes(1) &&
		player.squares.includes(5) &&
		player.squares.includes(9)
	) {
		document.getElementById("square1").classList.add("highlight");
		document.getElementById("square5").classList.add("highlight");
		document.getElementById("square9").classList.add("highlight");
		win = true;
	} else if (
		player.squares.includes(7) &&
		player.squares.includes(5) &&
		player.squares.includes(3)
	) {
		document.getElementById("square7").classList.add("highlight");
		document.getElementById("square5").classList.add("highlight");
		document.getElementById("square3").classList.add("highlight");
		win = true;
	} else if (squaresPlayed === 9) {
		squares.forEach(function (square) {
			square.disabled = true;
		});
		roundDetails.innerText = "";
		startBtn.innerText = "Recomeçar Jogo";
		startBtn.classList.remove("hidden");
		result.innerText = "Empate";
		name1.disabled = false;
		name1.classList.remove("disabled");
		name2.disabled = false;
		name2.classList.remove("disabled");
	}
	if (win) {
		squares.forEach(function (square) {
			square.disabled = true;
		});
		roundDetails.innerText = "";
		startBtn.innerText = "Recomeçar Jogo";
		startBtn.classList.remove("hidden");
		let resultTxt = "Vitória de: ";
		resultTxt += squaresPlayed % 2 !== 0 ? player1.name : player2.name;
		result.innerText = resultTxt;
		name1.disabled = false;
		name1.classList.remove("disabled");
		name2.disabled = false;
		name2.classList.remove("disabled");
	}
}
