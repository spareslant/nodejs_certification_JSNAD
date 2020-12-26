const {promisify} = require('util')
const timeout = promisify(setTimeout)

const req = async (url) => {
  await timeout(300)
  if (url === 'http://error.com') {
    throw new Error('network error')
  }
  return Buffer.from('some data')
}

module.exports = req