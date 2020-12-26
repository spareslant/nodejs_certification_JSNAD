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
      index += 1
      q = read(files[index])
      // we can't simply take advantage of call stack pop-up in recursive calls to reverse things
      // in async functions. because async functions do not block like sync functions
      data.push(contents)
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
