import React from 'react';
import { shallow } from 'enzyme';
import MainApp from './MainApp';


it('renders without crashing', () => {
	shallow(<MainApp />);
});
