import React from 'react';
import { shallow } from 'enzyme';
import { AccountsAddForm } from './AccountsAddForm';


it('renders without crashing', () => {
	shallow(
		<AccountsAddForm
			addAccount={() => {}}
		/>
	);
});
