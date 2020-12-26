const assert = require('assert').strict
const t = require('tap')

const store = require('../store.js')

// assert.rejects(store(1), new Error('input must be a buffer'))
// assert.doesNotReject(store(Buffer.from('abc')))
// store(Buffer.from('abc'))
//   .then((data) => {
//     assert.strictEqual(data.id.length, 4)
//   })

t.test('test it rejects', async (t) => {
  await t.rejects(store(3), new Error('input must be a buffer'))
})

t.test('test object length', async (t) => {
  const data = await store(Buffer.from('abc'))
  t.strictEqual(data.id.length, 4)
})