import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import accountSelectors from '../../selectors/accountsSelectors';

import './styles/InitialBalance.css';


const baseCssClassName = 'initial-balance';

const propTypes = {
	value: PropTypes.number.isRequired,
};

/**
 * Displays initial balance;
 * 
 * @param {Object} props
 * @param {number} props.value
 */
function InitialBalance (props) {
	return (
		<div className={baseCssClassName}>
			Initial balance: {props.value}
		</div>
	);
}

InitialBalance.propTypes = propTypes;

export {
	InitialBalance,
};

export default connect((state) => ({
	value: accountSelectors.selectBalance(state),
}))(InitialBalance);
