const {test} = require('tap')
const store = require('../store')

test('test error', async ({rejects}) => {
  await rejects(store('abc'), Error('input must be a buffer'))
})

test('output length', async({equal}) => {
  const result = await store(Buffer.from('abc'))
  equal(result.id.length, 4)
})