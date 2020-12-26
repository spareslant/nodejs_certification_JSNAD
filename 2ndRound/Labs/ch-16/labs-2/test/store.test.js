const assert = require('assert').strict
const t = require('tap')

const store = require('../store.js')

// store(Buffer.from('abc'), (err, value) => {
//   assert.ifError(err)
//   assert.ok(value)
//   assert.equal(value.id.length, 4)
// })

// store(5, (err, value) => {
//   assert.deepStrictEqual(err, new Error('input must be a buffer'))
// })

t.test('test outcome', (t) => {
  store(Buffer.from('abc'), (err, value) => {
    t.ifError(err)
    t.ok(value)
    t.strictEqual(value.id.length, 4)
    t.end()
  })
})

t.test('test error condition', (t) => {
  store(2, (err, value) => {
    t.strictDeepEqual(err, new Error('input must be a buffer'))
    t.end()
  })
})