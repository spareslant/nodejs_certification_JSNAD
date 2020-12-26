const {test} = require('tap')
const store = require('../store')

test('inout must be buffer', ({strictDeepEqual, end}) => {
  store('abc', (err, value) => {
    strictDeepEqual(err, Error('input must be a buffer'))
    end()
  })
})

test('length test', ({ok, end, equal, ifError}) => {
  store(Buffer.from('abc'), (err, data) => {
    ifError(err)
    equal(data.id.length, 4)
    end()
  })

})