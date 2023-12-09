import getColor from '../getColor';

test('getColor', () => {
  let result = getColor({name: 'Маг', health: 90});
  expect(result).toBe('healthy');

  result = getColor({name: 'Маг', health: 40});
  expect(result).toBe('wounded');

  result = getColor({name: 'Маг', health: 10});
  expect(result).toBe('critical');
});

