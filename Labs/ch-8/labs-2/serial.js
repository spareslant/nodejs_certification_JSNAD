'use strict'
const { promisify } = require('util')
const { syncBuiltinESMExports } = require('module')

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

/*======= START of callback based solution ========*/
// Callback based solution
// opA((err, value) => {
//   print(err, value)
//   opB((err, value) => {
//     print(err, value)
//     opC((err, value) => {
//       print(err, value)
//     })
//   })
// })

// opC((cerr, cvalue ) => {
//   opB((berr, bvalue) => {
//     opA((aerr, avalue) => {
//       print(aerr, avalue)
//       print(berr, bvalue)
//       print(cerr, cvalue)
//     })
//   })
// })
/*======= END of callback based solution ========*/


/*======= START of promisify based solution ========*/
// const opAprom = promisify(opA)
// const opBprom = promisify(opB)
// const opCprom = promisify(opC)

// async function run() {
//   await opAprom().then(print)
//   await opBprom().then(print)
//   await opCprom().then(print)
// }
// run()

/*======= END of promisify based solution ========*/

/*======= START of Promise based solution ========*/
const a = new Promise((resolve, reject) => {
  opA((err, value) => {
    resolve(value)
  })
})

const b = new Promise((resolve, reject) => {
  opB((err, value) => {
    resolve(value)
  })
})

const c = new Promise((resolve, reject) => {
  opC((err, value) => {
    resolve(value)
  })
})

// Promise chaining........
// a.then((result) => {
//   print(null, result)
//   return b
// }).then((result) => {
//   print(null, result)
//   return c
// }).then((result) => {
//   print(null, result)
// })

// Promise inside async.......
// const run = async () => {
//   await a.then(print)
//   await b.then(print)
//   await c.then(print)
// }
// run()

// Promise inside functions and async.......
const runa = () => {
  //a.then(print)
  //return a
  return a.then(print)
}
const runb = () => {
  //b.then(print)
  //return b
  return b.then(print)
}
const runc = () => {
  //c.then(print)
  //return c
  return c.then(print)
}

const run2 = async () => {
  await runa()
  await runb()
  await runc()
}
run2()
/*======= END of Promise based solution ========*/