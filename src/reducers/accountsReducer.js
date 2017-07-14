import accountActionTypes from '../actions/accountsActionTypes';


/**
 * @typedef {Object} AccountModel
 *
 * @property {number} balance
 */

/**
 * @typedef {Array<AccountModel>} AccountsStoreState
 */

/**
 * @param {AccountsStoreState} [state=[]]
 * @param {ReduxAction} action
 * @return {AccountsStoreState}
 */
export default function (state = [], action) {
    switch (action.type) {
        case accountActionTypes.ADD_ACCOUNT:
            return state.slice(0).concat(action.payload);

        default:
            return state;
    }
}
