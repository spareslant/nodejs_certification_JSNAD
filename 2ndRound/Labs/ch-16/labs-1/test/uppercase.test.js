// const assert = require('assert').strict

const uppercase = require('../uppercase.js')
const t = require('tap')



// assert.strictEqual(uppercase('yahoo'), 'YAHOO')
// assert.throws(() => {
//   uppercase(2)
// }, new Error('input must be a string'))

t.test('test uppercase output', async (t) => {
  t.strictEqual(uppercase('yahoo'), 'YAHOO')
})

t.test('test error condition', async (t) => {
  t.throws(() => uppercase(1), new Error('input must be a string'))
})