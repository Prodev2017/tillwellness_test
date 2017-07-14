import accountsReducer from './accountsReducer';
import accountActionTypes from '../actions/accountsActionTypes';
import storeUtils from '../utils/storeUtils';


describe('accountsReducer', () => {
	it ('should add one account', () => {
		const state = accountsReducer([], storeUtils.makeAction(accountActionTypes.ADD_ACCOUNT, { balance: 500 }));

		expect(state.length).toBe(1);
	});

	it ('should add one account', () => {
		let state = accountsReducer([], storeUtils.makeAction(accountActionTypes.ADD_ACCOUNT, { balance: 500 }));
		state = accountsReducer(state, storeUtils.makeAction(accountActionTypes.ADD_ACCOUNT, { balance: 200.4 }));

		expect(state.length).toBe(2);
	});
});
