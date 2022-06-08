const fetchProduct = require('../async.js');


describe('Async', () => {
  it('async-done', () => {
    fetchProduct().then((item) => {
      expect(item).toEqual({
    item:'Milk',
    price:200
  })
      done();
    })
  })

  it('async', () => {
    return gifetchProduct().then((item) => {
      expect(item).toEqual({
    item:'Milk',
    price:200
  })
    })
  })
})