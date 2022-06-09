function fetchProduct(error) {
  if(error === 'error') {
    return Promise.reject('에러');
  }

  return Promise.resolve({
    item:'Milk',
    price:200
  })
}

module.exports = fetchProduct