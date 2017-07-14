import React from 'react';
import { shallow } from 'enzyme';
import { MonthlyPaymentForm } from './MonthlyPaymentForm';


it('renders without crashing', () => {
	shallow(
		<MonthlyPaymentForm
			monthlyPayment={999.3}
			setPayment={() => {}}
		/>
	);
});
