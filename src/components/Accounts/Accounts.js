import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import AccountsAddForm from '../AccountsAddForm';
import AccountsList from '../AccountsList';

import accountSelectors from '../../selectors/accountsSelectors';

import './styles/Accounts.css';


const baseCssClassName = 'accounts';
const titleCssClassName = `${baseCssClassName}__title`;
const accountFormCssClassName = `${baseCssClassName}__add-form`;
const accountListCssClassName = `${baseCssClassName}__list`;

const propTypes = {
	numberOfAccounts: PropTypes.number.isRequired,
};

/**
 * Displays accounts section.
 *
 * @param {Object} props
 * @param {number} props.numberOfAccounts
 */
function Accounts (props) {
	return (
		<div className={baseCssClassName}>
			<div className={titleCssClassName}>Accounts</div>
			<div>Count: {props.numberOfAccounts}</div>

			<div className={accountFormCssClassName}>
				<AccountsAddForm />
			</div>
			<div className={accountListCssClassName}>
				<AccountsList />
			</div>
		</div>
	);
}

Accounts.propTypes = propTypes;

export {
	Accounts,
};

export default connect((state) => ({
	numberOfAccounts: accountSelectors.selectAccounts(state).length,
}))(Accounts);
