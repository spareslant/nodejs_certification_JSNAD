function fetchResults() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('good results')
    }, 2000)
  })
}

function codify(err, code) {
  err.code = code
  return err
}

class OddError extends Error {
  constructor(varName = '') {
    super(varName + ' must be even')
    this.code = "ERR_MUST_BE_EVEN"
  }
  get name() {
    return 'OddError [' + this.code + ' ]'
  }
}

async function doTask(amount) {
  if (typeof(amount) !== 'number') throw codify(new TypeError('amount must be a number.'), 'ERR_AMOUNT_MUST_BE_NUMBER')
  if (amount < 4) throw codify(new RangeError('amount cannot be less than 2.'), 'ERR_AMOUNT_MUST_EXCEED_4')
  if (amount % 2) throw new OddError(amount)
  // const result = await fetchResults()
  // return result
  throw new Error("some other error")
  return amount/2
}

function doAnotherTask(amount) {
  return new Promise((resolve, reject) => {
    if (typeof amount !== 'number') {
      reject(new TypeError('amount must be a number'))
      return
    }
    if (amount < 0) {
      reject(new RangeError('amount must be greater than 0'))
      return
    }
    if (amount % 2) {
      reject(new OddError(amount))
      return
    }
    resolve(amount/2)
  })
}
// doAnotherTask(6)
// .then((result) => { console.log(result)})
// .catch((err) => {console.log(err)})

async function run() {
  try {
    // const result = await doAnotherTask(4);
    const result = await doTask(6);
    console.log(result);
  } catch (err) {
    if (err instanceof TypeError) {
      console.log('wrong type')
    } else if (err instanceof RangeError) {
      console.log('out of range.')
    } else if (err.code === 'ERR_MUST_BE_EVEN') {
      console.log('cannot be odd')
    } else {
      throw err
    }
  }
}

run().catch(err => console.log(err))
// doTask(6).then((result) => console.log(result)).catch((err) => console.log(err))


// try {
//   setTimeout(() => {
//   const result = doTask(9)
//   console.log(result)
//   }, 2000)
// } catch (err) {
//   if (err.code === 'ERR_AMOUNT_MUST_BE_NUMBER' ) {
//     console.log('Wrong Type')
//   } else if (err.code === 'ERR_AMOUNT_MUST_EXCEED_4') {
//     console.log('out of range')
//   } else if (err.code === 'ERR_MUST_BE_EVEN') {
//     console.log('cannot be odd')
//   } else {
//     console.error('Unknown Error: ', err)
//   }
// }

// const e = new OddError()
// console.log(e.propertyIsEnumerable('name'))
// for (const key in e) {
//   console.log(key)
// }
