const sayHi = require('./sample');

describe('some test', () => {
  test('say hi to Monk', () => {
    expect(sayHi('Monk').toBe('Hi Monk'));
  });
});
