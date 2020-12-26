const { readFile } = require('fs')

const files = ['file1.txt', 'file2.txt', 'file3.txt']

let data = []

const print = (err, contents) => {
  if (err) {
    console.log(err)
    return err
  }
  console.log(contents.toString())
}

let index = 0
const read = (index) => {
  readFile(files[index], (err, contents) => {
    if (err) {
      print(err, null)
    }
    data.push(contents)
    index += 1
    if (index < files.length) {
      read(index)
    } else {
      console.log(Buffer.concat(data).toString())
    }
  })
  console.log(`===== read(index) = read(${index}) completed...`)
}
read(index)