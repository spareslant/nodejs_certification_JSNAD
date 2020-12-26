const fs = require('fs')
const fsPromises = fs.promises
const readFile = fsPromises.readFile

const files = ['../../serial-callbacks/afile.txt', '../../serial-callbacks/bfile1.txt', '../../serial-callbacks/cfile.txt']


const readers = files.map((file) => readFile(file))

Promise.all(readers).then((result) => {
  console.log(result)
}).catch((err) => {
  console.log(err)
})

Promise.allSettled(readers)
.then((items) => {
  items.forEach((item) => {
    console.log(`item=${item.value}, status=${item.status}`)
    // console.dir(item)

  })
})

console.dir(Object)