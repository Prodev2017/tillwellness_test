import React from 'react';
import { shallow } from 'enzyme';
import { InitialBalance } from './InitialBalance';


it('renders without crashing', () => {
	shallow(<InitialBalance value={1000.56} />);
});
