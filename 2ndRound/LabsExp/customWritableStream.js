const { Writable } = require('stream')

let data = []
const w = new Writable({
  objectMode: true,
  write(chunk, enc, next) {
    data.push(chunk)
    next()
  }
})

w.on('finish', () => {
  console.log('Finished writing: ', data)
})
w.write('A\n')
w.write('B\n')
w.write('C\n')
w.write(2)
w.end('All data written.\n')