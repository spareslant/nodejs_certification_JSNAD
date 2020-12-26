const t = require('tap')
const add = require('../add.js')

t.test('first batch', async (t) => {
  t.equal(add(5, 5), 10)
})

t.test('second batch', async (t) => {
  t.throws(() => {
    add('a', 5) 
  }, new Error('inputs must be numbers'))
})