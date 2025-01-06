let squaresPlayed = 0;
let player1 = {};
let player2 = {};

const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", startGame);

const squares = document.querySelectorAll('button[class="square"]');
squares.forEach(function (square) {
	square.addEventListener("click", checkGame);
});

function startGame() {
	player1 = { name: "", squares: [] };
	player2 = { name: "", squares: [] };
	squaresPlayed = 0;

	startBtn.classList.add("hidden");
	squares.forEach(function (square) {
		if (square.classList.contains("disabled")) {
			square.classList.remove("disabled");
		}
	});
}

function checkGame(ev) {
	let square = ev.currentTarget;
	squaresPlayed++;
	let player;
	if (squaresPlayed % 2 !== 0) {
		player = player1;
		square.innerText = "X";
	} else {
		player = player2;
		square.innerText = "O";
	}
	let value = square.dataset.value;
	player.squares.push(parseInt(value));

	if (player.includes(1) && player.includes(2) && player.includes(3)) {
	} else if (player.includes(4) && player.includes(5) && player.includes(6)) {
	} else if (player.includes(7) && player.includes(8) && player.includes(9)) {
	} else if (player.includes(1) && player.includes(4) && player.includes(7)) {
	} else if (player.includes(2) && player.includes(5) && player.includes(8)) {
	} else if (player.includes(3) && player.includes(6) && player.includes(9)) {
	} else if (player.includes(1) && player.includes(5) && player.includes(3)) {
	} else if (player.includes(7) && player.includes(5) && player.includes(3)) {
	}
}

function restartGame() {}
