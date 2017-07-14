import monthlyPaymentReducer from './monthlyPaymentReducer';
import monthlyPaymentActions from '../actions/monthlyPaymentActionTypes';
import storeUtils from '../utils/storeUtils';


describe('monthlyPaymentReducer', () => {
	it ('should set payment', () => {
		const state = monthlyPaymentReducer(0, storeUtils.makeAction(monthlyPaymentActions.SET_PAYMENT, 199));

		expect(state).toBe(199);
	});
});
