const { readFile } = require('fs').promises
let sleep = require('sleep')
const files = ['file1.txt', 'file2.txt', 'file3.txt']

let data = []

let index = 0

const read = (index) => {
  let s = readFile(files[index])
    .then((contents) => {
      s.id = index
      console.log("inside then method...", s)
      data.push(contents)
        index += 1
        if (index < files.length) {
          let p = read(index)
          return p
          // returning a value in then method is always wrapped in Promise.resolve()
          // i.e below statement is actually return Promise.resolve(p)
        } else {
          // console.log(Buffer.concat(data).toString())
          return data
        }
        // console.log(`readFile(index) = readFile(${index}) then handler finished..`)
    })
    .catch(console.error)
  // console.log(`===== read(index) = read(${index}) completed...`)
  console.log("outside readFile func .....", s)
  return s
}

let q = read(index)
// q=read(0) reads contents of file and push contents in data. calls async read(1), does not block, ends `then` block by returning a promise obtained from read(1).
// 
 q.then((contents) => {
    // console.log(Buffer.concat(contents).toString())
    console.log(contents.toString())
    console.log("======", q.id)
  })
  .catch(console.error)