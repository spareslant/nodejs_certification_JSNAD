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

function doTask(amount, cb) {
  if (typeof(amount) !== 'number') { 
    cb(codify(new TypeError('amount must be a number.'), 'ERR_AMOUNT_MUST_BE_NUMBER'))
    return
  }
  if (amount < 4) {
    cb(codify(new RangeError('amount cannot be less than 2.'), 'ERR_AMOUNT_MUST_EXCEED_4'))
    return
  }
  if (amount % 2) {
    cb(new OddError(amount))
    return
  }
  cb(new Error("some other error"))
  return
  cb(null, amount/2)
}

function run(cb) {
  doTask(6, (err, result) => {
    if (err) {
      cb(err)
      return
    } else {
      cb(null, result)
    }
  })  
}

run((err, result) => {
  if (err) {
    console.log(err)
  } else {
    console.log(result)
  }
})

