const { readFile } = require('fs')
const series = require('fastseries')()

const files = ['file1.txt', 'file2.txt', 'file3.txt']

const allFunctions = files.map((file) => {
  return (_, cb) => {
    readFile(file, (err, contents) => {
      if (err) {
        cb(err, null)
        return
      }
      cb(null, contents)
    })
  }
})

const done = (err, contents) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(Buffer.concat(contents).toString())
}


series(null, allFunctions, null, done)
