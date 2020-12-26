const {test} = require('tap')
const req = require('../req')
test('handles network error', ({strictDeepEqual, end}) => {
  req('http://error.com', (err) => {
    strictDeepEqual(err, Error('network error'))
    end()
  })
})

test('responds with data', ({ok, strictDeepEqual, ifError, end}) => {
  req('http://example.com', (err, data) => {
    ifError(err)
    ok(Buffer.isBuffer(data))
    strictDeepEqual(data, Buffer.from('some data'))
    end()
  })
})