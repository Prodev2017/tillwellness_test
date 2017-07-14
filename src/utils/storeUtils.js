import reduxThunkMiddleware from 'redux-thunk';

import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import accountsReducer from '../reducers/accountsReducer';
import monthlyPaymentReducer from '../reducers/monthlyPaymentReducer';


/**
 * @typedef {Object} AppStoreState
 *
 * @property {AccountsStoreState} accounts
 * @property {MonthlyPaymentStoreState} monthlyPayment
 */

/**
 * Returns base reducer.
 *
 * @returns {AppStoreState}
 */
function getReducer () {
    return combineReducers({
        accounts: accountsReducer,
        monthlyPayment: monthlyPaymentReducer,
    });
}

/**
 * Returns base enhancers.
 *
 * @returns {Array.<Function>}
 */
function getMiddlewares () {
  return [
      reduxThunkMiddleware,
  ];
}

/**
 * Creates configured store.
 *
 * @param initialState
 * @returns {Object}
 */
function configureStore(initialState = {}) {
    const enhancers = [
        applyMiddleware(...getMiddlewares()),
    ];

    return createStore(
        getReducer(),
        initialState,
        compose(...enhancers)
    );
}

/**
 * @typedef {Object} ReduxAction
 * 
 * @property {string|Symbol} type
 * @property {any} [payload=undefined]
 * @property {any} [meta=undefined]
 */


/**
 * Makes redux action.
 * 
 * @param {string|Symbol} type
 * @param {any} [payload=undefined]
 * @param {any} [meta=undefined]
 * @returns {ReduxAction}
 */
function makeAction (type, payload = undefined, meta = undefined) {
	if ( !type || !( typeof type === 'string' || type instanceof Symbol ) ) {
		throw new Error('Argument type should be a string or Symbol');
	}

	return {
		type,
		payload,
		meta,
	};
}

export default {
    configureStore,
	makeAction,
};
