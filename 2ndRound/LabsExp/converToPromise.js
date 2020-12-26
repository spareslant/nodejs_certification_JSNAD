const aFunc = (url, cb) => {
  setTimeout(() => {
    if (url === 'http://error.com') {
      cb(new Error('network error'), null)
    } else {
      cb(null, Buffer.from('some data'))
    }
  }, 300)
}

const promisifyThis = (func) => {
  return wrapper = (args) => {
    return new Promise((resolve, reject) => {
      func(args, (err, result) => {
        if (err) {
          reject(err)
          return
        } else {
          resolve(result)
          return
        }
      });
    });
  };
};

const bFunc = promisifyThis(aFunc)
bFunc('http://errors.com')
  .then((data) => {
    console.log(data.toString())
  })
  .catch((err) => {
    console.log(err)
  })

const run = async (url) => {
  const result = await bFunc(url)
  console.log(result.toString())
}

run('http://error.com').catch((err) => console.log(err))
run('http://example.com').catch((err) => console.log(err))
// aFunc('http://example.com', (err, result) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(result.toString())
// })