const t = require('tap')
const { test }  = require('tap')
const req = require('../req-prom.js')

t.test('first batch', async (t) => {
  await t.rejects(req('http://error.com'), new Error('network error'))
})

t.test('second batch', async (t) => {
  const data = await req('http://example.com')
  t.ok(Buffer.isBuffer(data))
  t.strictDeepEqual(data, Buffer.from('some data'))
})

// test('handles network errors', async ({ rejects }) => {
//   await rejects(req('http://error.com'), Error('network error'))
// })