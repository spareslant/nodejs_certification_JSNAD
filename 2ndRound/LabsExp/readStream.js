const fs = require('fs')

const s = fs.createReadStream('file1.txt')

s.on('data', (chunk) => {
  console.log(chunk)
})

s.on('end', () => {
  console.log('No more data')
})