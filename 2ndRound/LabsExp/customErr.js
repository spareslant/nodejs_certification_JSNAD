
class OddError extends Error {
  constructor(varName = '') {
    super(varName + ' must be odd.')
    this.code = 'ERR_MUST_BE_EVEN'
  }

  get name() {
    return `OddError [ ${this.code} ]`
  }
}

const dotask = (amount) => {
  if (typeof amount !== 'number') {
    throw new TypeError('amount must be a number')
  }
  if (amount % 2) {
    throw new OddError('amount')
  }

  return amount / 2
}

try {
  let result = dotask(4)
  console.log(result)
} catch (err) {
  console.log('Error caught: ', err)
}