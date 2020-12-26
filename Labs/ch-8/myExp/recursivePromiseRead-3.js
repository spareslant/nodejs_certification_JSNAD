const fs = require('fs')
const fsPromises = fs.promises
const readFile = fsPromises.readFile

const files = ['../../serial-callbacks/afile.txt', '../../serial-callbacks/bfile.txt', '../../serial-callbacks/cfile.txt']

let count = files.length

let index = 0

const read = (file) => {
  
  let p = readFile(file)
  .then((contents) => {
    index += 1
    if (index < count) {
      let q = read(files[index])
      // read function will finally return and exit at this point.
      // return contents + text inside .then will make then to return a resolved promise, which is returned again for previous .then method call in recursion
      return q.then((text) => {
        return contents + text
      })
    } else {
      return contents
    }
    // Below single return will also work instead of returning in else.
    // Remove the else section and un-comment the below line. Result will be same.
    // return contents
  }).catch((err) => {
    console.error(err)
    return err
  })
  return p
}

read(files[index])
.then((contents) => {
  console.log(contents)
})
