const csv = require('csv')
const fs = require('fs')
const { Writable } = require('stream')

const stdOutWritable = new Writable({
  objectMode: true,
  decodeStrings: false,
  write(chunk, encoding, callback) {
    console.log(chunk)
    callback()
  }
})

fs.createReadStream('./some.csv', { encoding: 'utf8'})
.pipe(csv.parse({delimiter: ':'}))
.pipe(stdOutWritable)
