import monthlyPaymentActionTypes from '../actions/monthlyPaymentActionTypes';


/**
 * @typedef {number} MonthlyPaymentStoreState
 */

/**
 * @param {MonthlyPaymentStoreState} [state=0]
 * @param {ReduxAction} action
 * @returns {MonthlyPaymentStoreState}
 */
export default function (state = 0, action) {
    switch (action.type) {
        case monthlyPaymentActionTypes.SET_PAYMENT:
            return action.payload;

        default:
			return state;
    }
}
