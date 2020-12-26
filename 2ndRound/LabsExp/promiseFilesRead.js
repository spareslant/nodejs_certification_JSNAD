const { readFile } = require('fs').promises

const files = ['file1.txt', 'file2.txt', 'file3.txt']

readFile(files[0])
  .then((data) => {
    console.log(data.toString())
    return readFile(files[1])
  })
  .then((data) => {
    console.log(data.toString())
    return readFile(files[2])
  })
  .then((data) => {
    console.log(data.toString())
  })
  .catch((err) => {
    console.error(err)
  })