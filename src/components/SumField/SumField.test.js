import React from 'react';
import { shallow } from 'enzyme';
import SumField from './SumField';


it('renders without crashing', () => {
	shallow(
		<SumField
			value={999.3}
			onChange={() => {}}
		/>
	);
});
