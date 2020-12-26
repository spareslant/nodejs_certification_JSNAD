const fs = require('fs')
const readFile = fs.readFileSync

const files = ['../../serial-callbacks/afile.txt', '../../serial-callbacks/bfile.txt', '../../serial-callbacks/cfile.txt']

let data = []
let count = files.length

let index = 0
let reverseIndex = files.length

const read = (file) => {
  
  let p = readFile(file)
  index += 1
  if (index < count) {
    read(files[index])
    // inverse operation using pop-up recursive call stack. 
    // last recursive call will be poped-up first.
    // therefore plcaing data.push after read(file) function will ensure that last call of 
    // read function during the recursion will be executing first during the pop-up of call stack
    data.push(p)
    reverseIndex = reverseIndex - 1
  } else {
    data.push(p)
  }
  if (reverseIndex === 1) {
    console.log(Buffer.concat(data).toString())
  }
}

read(files[index])