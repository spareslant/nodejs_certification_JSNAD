const {readFileSync} = require('fs')

const buf = readFileSync(process.argv[2])

//console.log(buf.toString().split('\n'))

arr = buf.toString().match(/\n/g) || []
console.log(arr.length)
