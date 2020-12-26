const {test} = require('tap') 
const req = require('../req-prom')

test('handles network error', async ({rejects}) => {
  await rejects(req('http://error.com'), Error('network error')) 
})

test('respond with data', async ({ok, strictDeepEqual}) => {
  const data = await req('http://example.com')
  ok(Buffer.isBuffer(data))
  strictDeepEqual(data, Buffer.from('some data'))
})