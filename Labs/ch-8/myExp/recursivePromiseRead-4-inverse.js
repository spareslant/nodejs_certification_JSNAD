const fs = require('fs')
const fsPromises = fs.promises
const readFile = fsPromises.readFile

const files = ['../../serial-callbacks/afile.txt', '../../serial-callbacks/bfile.txt', '../../serial-callbacks/cfile.txt']

let count = files.length

let index = 0

const read = (file) => {
  if (index < count) {
    let p = readFile(file)
    .then((contents) => {
      index += 1;
      let q = read(files[index])
      if (q !== null) {
        return q.then((text) => {
          return text + contents
        })
      } else {
        return contents
      }
    })
    .catch((err) => {
      console.error(err)
      return err
    })
    return p
  }
  return null
};

read(files[index])
.then((contents) => {
  console.log(contents)
})
