const { readFile } = require('fs')

const files = new Array(3).fill(__filename)

const print = (err, contents) => {
  if (err) {
    console.error(err)
    return err
  }
  console.log(contents.toString())
}

let data = []

readFile(files[0], (err, contents) => {
  if (err) print(err)
  else data.push(contents)
  readFile(files[1], (err, contents) => {
    if (err) print(err)
    else data.push(contents)
    readFile(files[2], (err, contents) => {
      if (err) print(err)
      else data.push(contents)
      print(null, Buffer.concat(data))
    })
  })
})