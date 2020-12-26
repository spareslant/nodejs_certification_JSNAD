const {promisify} = require('util')

const myFunc = (cb) => {
  setTimeout(() => { cb(null, "yahoo...")} , 2000)
}

const p = new Promise((resolve, reject) => {
  myFunc((err, value) => {
    if (err) {
      reject(err)
    }
    resolve(value)
  })
})
// p.then(console.log)

// const promisedMyFunc = promisify(myFunc)
// promisedMyFunc()
// .then((result) => console.log(`result=${result}`))
// .catch((err) => console.log(`error=${err}`))

/*=================================*/
const print1 = () => {
  setTimeout(() => { console.log("print1")}, 2000)
}
const print2 = () => {
  setTimeout(() => { console.log("print2")}, 3000)
}
const print3 = () => {
  setTimeout(() => { console.log("print3")}, 1000)
}

const bfunc = (cb) => {
  print1()
  print2()
  print3()
  cb()
}

bProm = promisify(bfunc)
bProm().then()
console.log("yahooooooooooo.....")