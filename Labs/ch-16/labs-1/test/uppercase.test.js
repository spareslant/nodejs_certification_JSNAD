const {test} = require('tap')
const uppercase = require('../uppercase')

test('throws error on invalid input', async ({throws}) => {
  throws(() => uppercase(1), Error('input must be a string'))
})

test('coverts to uppercase', async ({equal}) => {
  equal(uppercase('abc'), 'ABC')
})