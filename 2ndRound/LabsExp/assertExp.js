const assert = require('assert').strict

const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Error('inputs must be numbers')
  }
  return a + b
}

assert.throws(() => {
  add(4, '5')
})

assert.doesNotThrow(() => {
  add(4, 5)
})