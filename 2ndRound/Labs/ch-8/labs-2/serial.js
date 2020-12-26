'use strict'
const { promisify } = require('util')

const print = (err, contents) => { 
  if (err) console.error(err)
  else console.log(contents) 
}

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
}

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
}

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}

// opA((err, result) => {
//   print(err, result)
//   opB((err, result) => {
//     print(err, result)
//     opC((err, result) => {
//       print(err, result)
//     })
//   })
// })

let popA = promisify(opA)
let popB = promisify(opB)
let popC = promisify(opC)

// popA()
//   .then((result) => {
//     console.log(result)
//     return popB()
//   })
//   .then((result) => {
//     console.log(result)
//     return popC()
//   })
//   .then((result) => {
//     console.log(result)
//   })

const run = async () => {
  await popA().then(print)
  await popB().then(print)
  await popC().then(print)
}
run().catch(console.error)