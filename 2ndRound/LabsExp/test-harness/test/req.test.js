const t = require('tap')
const req = require('../req.js')

t.test('first batch', (t) => {
  req('http://error.com', (err, result) => {
    t.strictDeepEqual(err, new Error('network error'))
    t.end()
  })
})

t.test('second batch', (t) => {
  req('http://example.com', (err, result) => {
    t.ifError(err)
    t.strictDeepEqual(result, Buffer.from('some data'))
    t.end()
  })
})