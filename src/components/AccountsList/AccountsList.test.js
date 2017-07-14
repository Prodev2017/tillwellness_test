import React from 'react';
import { shallow } from 'enzyme';
import { AccountsList } from './AccountsList';


it('renders without crashing', () => {
	shallow(
		<AccountsList
			accounts={[
				{ balance: 90 },
				{ balance: 180 },
			]}
		/>
	);
});
