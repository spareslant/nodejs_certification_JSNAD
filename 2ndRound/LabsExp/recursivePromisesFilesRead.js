const { readFile } = require('fs').promises
const files = ['file1.txt', 'file2.txt', 'file3.txt']

let data = []

let index = 0

const read = (index) => {
  readFile(files[index])
    .then((contents) => {
      data.push(contents)
        index += 1
        if (index < files.length) {
          read(index)
        } else {
          console.log(Buffer.concat(data).toString())
          // return data
        }
        console.log(`readFile(index) = readFile(${index}) then handler finished..`)
    })
    .catch(console.error)
  // console.log(`===== read(index) = read(${index}) completed...`)
}

read(index)
  // .then((contents) => {
  //   console.log(Buffer.concat(contents).toString())
  // })
  // .catch(console.error)