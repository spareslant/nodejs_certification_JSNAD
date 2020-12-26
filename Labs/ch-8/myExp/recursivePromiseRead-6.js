const fs = require('fs')
const fsPromises = fs.promises
const readFile = fsPromises.readFile

const files = ['../../serial-callbacks/afile.txt', '../../serial-callbacks/bfile.txt', '../../serial-callbacks/cfile.txt']

let data = []
let count = files.length

let index = 0

const read = (file) => {
  
  let p = readFile(file)
  .then((contents) => {
    data.push(contents)
    index += 1
    if (index < count) {
      let q = read(files[index])
      return q
    } else {
      return data
    }
  })
  .catch((err) => {
    console.log(err)
    return err
  })
  return p
}

read(files[index])
.then((contents) => {
  console.log(Buffer.concat(contents).toString())
  // console.log(Buffer.concat(data).toString())
})
.catch((err) => {
  console.log(err)
})
