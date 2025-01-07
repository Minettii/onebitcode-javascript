function media(...nums) {
	return nums.reduce((accum, num) => accum + num, 0) / nums.length;
}

function mediaPonderada(...nums) {
	const soma = nums.reduce((accum, num) => accum + num.n * num.p, 0);
	const somaPeso = nums.reduce((accum, num) => accum + num.p, 0);
	return soma / somaPeso;
}

function mediana(...nums) {
	return nums.length % 2 !== 0
		? nums[Math.floor(nums.length / 2)]
		: (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
}

function moda(...nums) {
	let repetitions = {};
	nums.forEach((num) => {
		if (!repetitions[num]) {
			repetitions[num] = 1;
		} else {
			repetitions[num]++;
		}
	});
	return Object.entries(repetitions).reduce((a, b) =>
		a[1] > b[1] ? a : b
	)[0];
}
