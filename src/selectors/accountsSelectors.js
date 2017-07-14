import { createSelector } from 'reselect'

/**
 * Returns all accounts.
 *
 * @param {Object} state
 */
const selectAccounts = (state) => state.accounts;

/**
 * Returns balance for all accounts.
 */
const selectBalance = createSelector(
	[ selectAccounts ],
	(accounts) => accounts.reduce((total, account) => (total + account.balance), 0)
);

export default {
	selectAccounts,
	selectBalance,
}
