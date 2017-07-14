import storeUtils from '../utils/storeUtils';

import accountActionTypes from './accountsActionTypes';


/**
 * Add an account.
 *
 * @param {Object} options
 * @param {number} options.balance Account balance.
 */
function addAccount (options) {
	const {
		balance,
	} = options;

	if ( typeof balance !== 'number' || isNaN(balance) || balance < 0 ) {
		throw new Error('Argument "balance" should be a positive number.');
	}

	return (dispatch) => dispatch(storeUtils.makeAction(accountActionTypes.ADD_ACCOUNT, {
		balance: options.balance,
	}));
}

export default {
	addAccount,
};
