const aFunc = (url, cb) => {
  setTimeout(() => {
    if (url === 'http://error.com') {
      cb(new Error('network error'), null)
    } else {
      cb(null, Buffer.from('some data'))
    }
  }, 300)
}

module.exports = aFunc