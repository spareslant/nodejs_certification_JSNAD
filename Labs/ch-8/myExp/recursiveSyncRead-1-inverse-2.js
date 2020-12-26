const fs = require('fs')
const readFile = fs.readFileSync

const files = ['../../serial-callbacks/afile.txt', '../../serial-callbacks/bfile.txt', '../../serial-callbacks/cfile.txt']

let data = []
let count = files.length

// inverse operation using inverse counting
let index = count - 1

const read = (file) => {
  
  let p = readFile(file)
  data.push(p)
  index -= 1
  if (index >= 0) {
    read(files[index])
  } else {
    console.log(Buffer.concat(data).toString())
  }
}

read(files[index])
