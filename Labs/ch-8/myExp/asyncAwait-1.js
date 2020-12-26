const fs = require('fs')
const fsPromises = fs.promises
const readFile = fsPromises.readFile

const files = ['../../serial-callbacks/afile.txt', '../../serial-callbacks/bfile.txt', '../../serial-callbacks/cfile.txt']

let data = []

async function run() {

  const readers = files.map((file) => {
    return readFile(file)
  })

  const result = await Promise.all(readers)
  console.log(Buffer.concat(result).toString())

}

run()