const assert = require('assert')
const {promisify} = require('util')

const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('inputs must be numbers')
  }
  return a + b
}

assert.throws(() => add('1', 2), Error('inputs must be numbers'))

const afunc = (url, cb) => {
  setTimeout(() => {
    if (url === "http://error.com") {
      cb(new Error("network error"));
    } else {
      cb(null, Buffer.from("some data"));
    }
  }, 300);
}

afunc('http://example.com', (err, data) => {
  assert.ifError(err)
})

afunc('http://error.com', (err, data) => {
  assert.deepStrictEqual(err, new Error('network error'))
})

const timeout = promisify(setTimeout)

const bfunc = async (url) => {
  await timeout(300)
  if (url === 'http://error.com') throw new Error('network error')
  return Buffer.from('some data')
}

assert.doesNotReject(bfunc('http://example.com'))
assert.rejects(bfunc('http://error.com'), Error('network error'))