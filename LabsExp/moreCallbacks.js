const fs = require('fs')
const series = require('fastseries')()

const print = (err, contents) => {
  if (err) {
    console.error(err)
    return
  }
  //console.log(Buffer.concat(contents).toString())
  console.log(contents.toString())
}

const readAfile = (file, timeout, cb) => {
  setTimeout(fs.readFile, timeout, file, cb)
}

const files = fs.readdirSync(".").filter((file) => /\.txt$/.test(file))
const readFileFuncs = files.map((file, index) => {
  return (cb) => readAfile(file, (index + 1) * 1000, print)
})

console.log(readFileFuncs)
//readFileFuncs.forEach((entry) => entry())
series(null, readFileFuncs, null, print)


console.log("======starting main============")
//readAfile(__filename, 2000)
console.log("======Finishing main============")
