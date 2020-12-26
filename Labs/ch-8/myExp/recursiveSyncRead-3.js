const fs = require('fs')
const readFile = fs.readFileSync

const files = ['../../serial-callbacks/afile.txt', '../../serial-callbacks/bfile.txt', '../../serial-callbacks/cfile.txt']

let count = files.length

let index = 0

const read = (file) => {
  
  let p = readFile(file)
  index += 1
  if (index < count) {
    let q = read(files[index])
    // console.log(`index=${index}, p=${p}, q=${q}`)
    p = p + q
  }
  return p
}

let p = read(files[index])
console.log(p)
