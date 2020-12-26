const p = new Promise((resolve, reject) => {
  resolve('PROMISE VALUE')
})

p.then((data) => console.log(data))
console.log('MAIN PROGRAM')