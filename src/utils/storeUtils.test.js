import storeUtils from './storeUtils';


describe('store utils', () => {
	it('should make a new action only with type', () => {
		expect(storeUtils.makeAction('add')).toEqual({
			type: 'add',
			payload: void(0),
			meta: void(0),
		});
	});

	it('should make a new action only with type', () => {
		expect(storeUtils.makeAction('add', 14)).toEqual({
			type: 'add',
			payload: 14,
			meta: void(0),
		});
	});

	it('should make a new action only with type, payload', () => {
		expect(storeUtils.makeAction('add', 14, 'extra')).toEqual({
			type: 'add',
			payload: 14,
			meta: 'extra',
		});
	});

	it('should throw an exception if type is empty', () => {
		expect(() => {
			storeUtils.makeAction(null, 14, 'extra')
		}).toThrow();
	});
});
