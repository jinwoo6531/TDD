const Calculator = require('../calculator.js');

describe('Calculator', () => {
  let cal;

  beforeEach(() => {
    cal = new Calculator();
  })

  
  it('inits with 0', () => {
      expect(cal.value).toBe(0);
  })

  it('set', () => {
      cal.set(9);
      expect(cal.value).toBe(9);
  })
})