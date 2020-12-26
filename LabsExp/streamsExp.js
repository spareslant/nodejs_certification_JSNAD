// const fs = require('fs')
// const readable = fs.createReadStream(__filename)
// readable.on('data', (data) => console.log(data))
// readable.on('end', () => console.log('finished reading'))

const {Readable} = require('stream')
const createReadStream = () => {
  const data = ['some', 'data', 'to', 'read']
  return new Readable({
    objectMode: true,
    read() {
      if (data.length === 0) this.push(null) 
      else this.push(data.shift())
    }
  })
}

// const readable = createReadStream()
// const readable = Readable.from(['yahoo', 'hotmail'])
// readable.on('data', (data) => console.log(data))
// readable.on('end', () =>  console.log('finished reading'))

// const fs = require('fs')
// const writable = fs.createWriteStream('./out')
// writable.on('finish', () => console.log('finished writing'))
// writable.write('yahoo\n')
// writable.write('yahoo\n')
// writable.end('thats it')

const data = []
const {Writable} = require('stream')
const createWriteStream = (data) => {
  return new Writable({
    objectMode: true,
    write(chunk, enc, next) {
      data.push(chunk);
      next()
    },
  });
}

const writable = createWriteStream(data)
writable.on('finish', () => console.log('finished writing', data))
writable.write('hotmail\n')
writable.write('hotmail\n')
writable.write(2)
writable.end('Nothing more to write\n')
