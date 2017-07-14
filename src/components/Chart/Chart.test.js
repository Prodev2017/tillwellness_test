import React from 'react';
import { shallow } from 'enzyme';
import { Chart } from './Chart';


it('renders without crashing', () => {
	shallow(
		<Chart
			initialBalance={999.3}
			monthlyPayment={333}
		/>
	);
});
