const assert = require('assert').strict

const aFunc = (url, cb) => {
  setTimeout(() => {
    if ( url === 'http://error.com') {
      cb(new Error('network error'), null)
    } else {
      cb(null, Buffer.from('some data'))
    }
  }, 300)
}

aFunc('http://example.com', (err, result) => {
  assert.ifError(err)
})
aFunc('http://error.com', (err, result) => {
  assert.deepStrictEqual(err, new Error('network error'))
})