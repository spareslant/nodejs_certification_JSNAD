const fs = require('fs')
const fsPromises = fs.promises
const readFile = fsPromises.readFile

const files = ['../../serial-callbacks/afile.txt', '../../serial-callbacks/bfile.txt', '../../serial-callbacks/cfile.txt']

let data = []
async function run() {

  for (const file of files) {
    let d = await readFile(file)
    data.push(d)
  }
  // console.log(Buffer.concat(data).toString())
}

// run().catch((err) => {
//   console.log(err)
// })

run().then((contents) => {
  console.log(Buffer.concat(data).toString())
})