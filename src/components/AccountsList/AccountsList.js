import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import accountSelectors from '../../selectors/accountsSelectors';

const baseCssClassName = 'accounts-list';

const propTypes = {
	accounts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

/**
 * Displays accounts list.
 *
 * @param {Object} props
 * @param {Array.<AccountModel>} props.accounts
 */
function AccountsList (props) {
	return (
		<div className={baseCssClassName}>
			{props.accounts.map((account, i) => (
				<div key={i}>Balance: {account.balance}</div>
			))}
		</div>
	);
}

AccountsList.propTypes = propTypes;

export {
	AccountsList,
};

export default connect((state) => ({
	accounts: accountSelectors.selectAccounts(state),
}))(AccountsList);
