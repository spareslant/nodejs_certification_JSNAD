  const fs = require('fs')
const readFile = fs.readFileSync

const files = ['../../serial-callbacks/afile.txt', '../../serial-callbacks/bfile.txt', '../../serial-callbacks/cfile.txt']

let data = []
let count = files.length

let index = 0

const read = (file) => {
  
  let p = readFile(file)
  index += 1
  if (index < count) {
    read(files[index])
    data.push(p)
  } else {
    data.push(p)
  }
}

read(files[index])
console.log(Buffer.concat(data).toString())
