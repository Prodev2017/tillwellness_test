import React from 'react';
import { shallow } from 'enzyme';
import ChartApp from './ChartApp';


it('renders without crashing', () => {
	shallow(<ChartApp />);
});
