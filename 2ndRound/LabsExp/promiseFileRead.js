const { readFile } = require('fs').promises

let r = readFile('file1.txt')
  .then((contents) => {
    // console.log(contents.toString())
    return readFile('file2.txt')
  })
  .catch((err) => {
    console.error(err)
  })

  r.then((contents) => {
    console.log(contents.toString())
  })