
const req = (url, cb) => {
  setTimeout(() => {
    if(url === 'http://error.com') {
      cb(Error('network error'))
    } else {
      cb(null, Buffer.from('some data'))
    }
  }, 300)
}

module.exports = req