const logic = {
	look: (records, pivot) => {
		const queueArr = records.map(record => record.value);

		const leftArray = [];
		const rightArray = [];

		queueArr.forEach(e => {
			e < pivot ? leftArray.push(e) : rightArray.push(e);
		});

		console.log({ leftArray, rightArray });

		const direction = 'right';

		const results =
			direction === 'right'
				? [
						pivot,
						...rightArray.sort((a, b) => a - b),
						...leftArray.sort((a, b) => b - a)
				  ]
				: [
						pivot,
						...leftArray.sort((a, b) => b - a),
						...rightArray.sort((a, b) => a - b)
				  ];

		const output = {
			records: [],
			seekTime: calculateLookTotalSeekTime(queueArr, pivot)
		};

		results.forEach(result =>
			output.records.push({
				time: output.records.length * 100,
				value: result
			})
		);

		return output;
	},

	cLook: (records, pivot) => {
		const queueArr = records.map(record => record.value);

		const leftArray = [];
		const rightArray = [];

		queueArr.forEach(e => {
			e < pivot ? leftArray.push(e) : rightArray.push(e);
		});

		let direction = 'right';

		const results =
			direction === 'right'
				? [
						pivot,
						...rightArray.sort((a, b) => a - b),
						...leftArray.sort((a, b) => a - b)
				  ]
				: [
						pivot,
						...leftArray.sort((a, b) => b - a),
						...rightArray.sort((a, b) => b - a)
				  ];

		const output = {
			records: [],
			seekTime: calculateCLookTotalSeekTime(queueArr, pivot)
		};

		results.forEach(result =>
			output.records.push({
				time: output.records.length * 100,
				value: result
			})
		);

		return output;
	}
};

function calculateCLookTotalSeekTime(queueArr, pivot) {
	let totalSeekTime = 0;

	queueArr.sort((a, b) => a - b);

	const initialIndex = queueArr.findIndex(request => request >= pivot);

	// Traverse the queueArr in the forward direction
	for (let i = initialIndex; i < queueArr.length; i++) {
		totalSeekTime += Math.abs(queueArr[i] - pivot);
		pivot = queueArr[i];
	}

	// Traverse the queueArr in the forward direction again, starting from the beginning
	for (let i = 0; i < initialIndex; i++) {
		totalSeekTime += Math.abs(queueArr[i] - pivot);
		pivot = queueArr[i];
	}
	return totalSeekTime;
}

function calculateLookTotalSeekTime(queueArr, pivot) {
	let totalSeekTime = 0;

	// Sort the queueArr in ascending order
	queueArr.sort((a, b) => a - b);

	// Find the index of the initial position
	const initialIndex = queueArr.findIndex(request => request >= pivot);

	// Traverse the queueArr in the forward direction
	for (let i = initialIndex; i < queueArr.length; i++) {
		totalSeekTime += Math.abs(queueArr[i] - pivot);
		pivot = queueArr[i];
	}

	// Traverse the queueArr in the backward direction
	for (let i = initialIndex - 1; i >= 0; i--) {
		totalSeekTime += Math.abs(queueArr[i] - pivot);
		pivot = queueArr[i];
	}

	return totalSeekTime;
}

export default logic;
