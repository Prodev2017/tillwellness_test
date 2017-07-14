/**
 * Builds chart data.
 *
 * @param {Object} options
 * @param {number} options.initialBalance Initial balance.
 * @param {number} options.monthlyPayment Monthly payment.
 */
function buildData (options) {
	const {
		initialBalance,
		monthlyPayment,
	} = options;

	const result = [];

	result.push({ name: 0, value: initialBalance });
	for (let i = 1, l = Math.ceil(initialBalance / monthlyPayment); i <= l ; i++ ) {
		let value = Math.max(0, initialBalance - ( monthlyPayment * i ));
		result.push({ name: i, value });
	}

	return result;
}

export default {
	buildData,
}
