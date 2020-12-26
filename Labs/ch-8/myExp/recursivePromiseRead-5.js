const fs = require('fs')
const fsPromises = fs.promises
const readFile = fsPromises.readFile

const files = ['../../serial-callbacks/afile.txt', '../../serial-callbacks/bfile.txt', '../../serial-callbacks/cfile.txt']

let data = []
let count = files.length

let index = 0

const read = (file) => {
  
  if (index < count) {
    let p = readFile(file)
    .then((contents) => {
      data.push(contents)
      index += 1
      q = read(files[index])
      if (q !== null) {
        return q
      }
    })
    .catch((err) => {
      console.error(err)
      return err
    })
    return p
  }
  return null
}

read(files[index])
.then((contents) => {
  console.log(Buffer.concat(data).toString())
})
