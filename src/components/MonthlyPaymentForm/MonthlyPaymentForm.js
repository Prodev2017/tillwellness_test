import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SumField from '../SumField';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import monthlyPaymentActions from '../../actions/monthlyPaymentActions';


const baseCssClassName = 'monthly-payment-form';

const propTypes = {
	monthlyPayment: PropTypes.number.isRequired,
	setPayment: PropTypes.func.isRequired,
};

/**
 * Displays monthly payment form.
 */
class MonthlyPaymentForm extends PureComponent {
	/**
	 * @param {number} value
	 * @private
	 */
	_handleChange = (value) => {
		console.dir(value);

		this.props.setPayment({
			value: ( value || 0 ),
		});
	}

	render () {
		return (
			<div className={baseCssClassName}>
				Monthly Payment <SumField onChange={this._handleChange} value={this.props.monthlyPayment} />
			</div>
		);
	}
}

MonthlyPaymentForm.propTypes = propTypes;

export {
	MonthlyPaymentForm,
};

export default connect((state) => ({
	monthlyPayment: state.monthlyPayment,
}), (dispatch) => bindActionCreators({
	setPayment: monthlyPaymentActions.setPayment,
}, dispatch))(MonthlyPaymentForm);
