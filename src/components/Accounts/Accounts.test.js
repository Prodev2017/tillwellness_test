import React from 'react';
import { shallow } from 'enzyme';
import { Accounts } from './Accounts';


it('renders without crashing', () => {
	shallow(
		<Accounts
			numberOfAccounts={2}
		/>
	);
});
