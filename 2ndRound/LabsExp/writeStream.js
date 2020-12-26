const fs = require('fs')

const w = fs.createWriteStream('./outFile')
w.on('finish', () => {
  console.log(`All data written to ./outFile`)
})

w.write('A\n')
w.write('B\n')
w.write('C\n')
w.end('All finished.\n')