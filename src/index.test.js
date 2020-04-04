const generateIdGenerator = require('./index');

describe('test id-generator', () => {
  it('generate id from 5', () => {
    const mock = jest.fn();
    const generateFrom5 = generateIdGenerator(5);
    const first = generateFrom5();
    const second = generateFrom5();

    expect(first).toBe(5);
    expect(second).toBe(6);
  });
  it('run 1 thousand times and get a result of 999', () => {
    const generateId = generateIdGenerator();
    for (let i = 999; i > 0; i--) {
      generateId();
    }
    const thousand = generateId();
    expect(thousand).toBe(999);
  });
});
