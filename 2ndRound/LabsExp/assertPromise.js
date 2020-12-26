const assert = require('assert').strict
const { promisify } = require('util')

const psetTimeout = promisify(setTimeout)

const aFunc = async (url) => {
  await psetTimeout(300)
  if (url === 'http://error.com') {
    throw new Error('network error')
  }
  return Buffer.from('some data')
}

assert.doesNotReject(aFunc('http://example.com'))
assert.rejects(aFunc('http://error.com'), new Error('network error'))