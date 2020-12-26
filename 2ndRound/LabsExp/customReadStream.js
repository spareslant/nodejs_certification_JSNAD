const { Readable } = require('stream')

const data = ['This', 'is', 'a', 'test']
const myReadable = new Readable({
  objectMode: true,
  read(size) {
    if (data.length === 0) {
      this.push(null)
      return
    }
    this.push(data.shift())
  }
})

myReadable.on('data', (chunk) => {
  console.log(chunk)
})

myReadable.on('end', () => {
  console.log('I am done.')
})