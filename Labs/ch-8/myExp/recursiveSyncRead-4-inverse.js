const fs = require('fs')
const readFile = fs.readFileSync

const files = ['../../serial-callbacks/afile.txt', '../../serial-callbacks/bfile.txt', '../../serial-callbacks/cfile.txt']

let count = files.length

let index = 0

const read = (file) => {
  
  if (index < count) {
    let p = readFile(file)
    index += 1
    let q = read(files[index])
    if (q !== null) {
      p = q + p
    }
    return p
  }
  return null
}

let p = read(files[index])
console.log(p)
