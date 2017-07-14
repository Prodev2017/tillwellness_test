import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import { connect } from 'react-redux';

import chartUtils from '../../utils/chartUtils';
import accountSelectors from '../../selectors/accountsSelectors';
import monthlyPaymentSelectors from '../../selectors/monthlyPaymentSelectors';

import './styles/Chart.css';


const baseCssClassNames = 'chart';
const descriptionCssClassNames = `${baseCssClassNames}__description`;

const propTypes = {
	initialBalance: PropTypes.number.isRequired,
	monthlyPayment: PropTypes.number.isRequired,
};

/**
 * Displays chart.
 *
 * @param {Object} props
 */
function Chart (props) {
	const {
		initialBalance,
		monthlyPayment,
	} = props;

	if ( initialBalance === 0 || monthlyPayment === 0 || initialBalance < monthlyPayment ) {
		return null;
	}
	
	return (
		<div className={baseCssClassNames}>
			<div className={descriptionCssClassNames}>Balance of accounts after a number of months</div>
			<LineChart
				width={600}
				height={300}
				data={chartUtils.buildData({
				initialBalance,
				monthlyPayment,
			})}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
			>
				<XAxis dataKey={'name'} />
				<YAxis/>
				<Tooltip />
				<CartesianGrid strokeDasharray={'3 3'} />
				<Line type={'monotone'} dataKey={'value'} stroke={'#8884d8'} activeDot={{ r: 8 }}/>
			</LineChart>
		</div>
	);
}

Chart.propTypes = propTypes;

export {
	Chart,
};

export default connect((state) => ({
	initialBalance: accountSelectors.selectBalance(state),
	monthlyPayment: monthlyPaymentSelectors.selectPayment(state),
}))(Chart);
