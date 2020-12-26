const p = new Promise((resolve, reject) => {
  resolve('I FIRED')
  reject(new Error('I DID NOT FIRE'))
})

p.then((data) => console.log(data), (err) => console.log(err.message))