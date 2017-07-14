import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
	value: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};

/**
 * Displays field where a user should enter a number.
 */
class SumField extends PureComponent {
	_handleChange = (event) => {
		// @todo we should validate user value to get only positive number.
		const value = Math.abs(parseFloat(event.currentTarget.value));
		this.props.onChange(value);
	}
	
	render () {
		return (
			<input type={'number'} onChange={this._handleChange} value={this.props.value} />
		);
	}
}

SumField.propTypes = propTypes;

export default SumField;
