const { Readable } = require('stream')

const readable = new Readable({
  read(size) {
    console.log('\nread method:', size)
    this.currentCharCode += 1
    this.push(String.fromCharCode(this.currentCharCode))

    if (this.currentCharCode > 90) {
      this.push(null)
    }
  }
})

readable.currentCharCode = 65

readable.on('data', (chunk) => {
  console.log(chunk.toString())
})

readable.on('end', () => {
  console.log('stream closed')
} )