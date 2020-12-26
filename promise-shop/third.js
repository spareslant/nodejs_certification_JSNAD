const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'))
  }, 300)
})

p.then((data) => console.log(data), (err) => console.log(err.message))