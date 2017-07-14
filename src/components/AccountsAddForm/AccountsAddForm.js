import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import accountActions from '../../actions/accountsActions';

import SumField from '../SumField';


const baseCssClassName = 'accounts-add-form';

const propTypes = {
	addAccount: PropTypes.func.isRequired,
};


/**
 * Displays Account add from.
 */
class AccountsAddForm extends PureComponent {
	constructor (props, context) {
		super(props, context);

		this.state = {
			accountBalance: 0,
		};
	}

	_handleSubmitClick = () => {
		const {
			accountBalance,
		} = this.state;

		if ( !accountBalance ) {
			return;
		}

		this.props.addAccount({
			// @todo we should to correct convert to js float
			balance: this.state.accountBalance,
		});

		this.setState({
			accountBalance: 0,
		});
	}

	_handleChange = (balance) => {
		this.setState({
			accountBalance: balance,
		});
	}

	render () {
		return (
			<div className={baseCssClassName}>
				Balance <SumField onChange={this._handleChange} value={this.state.accountBalance} />
				<div>
					<button onClick={this._handleSubmitClick}>Submit</button>
				</div>
			</div>
		);
	}
}

AccountsAddForm.propTypes = propTypes;

export {
	AccountsAddForm,
};

export default connect(null, (dispatch) => bindActionCreators({
	addAccount: accountActions.addAccount,
}, dispatch))(AccountsAddForm);
