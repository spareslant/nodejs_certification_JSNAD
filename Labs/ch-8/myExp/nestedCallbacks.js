const fs = require('fs')

const files = ['../../serial-callbacks/afile.txt', '../../serial-callbacks/bfile.txt', '../../serial-callbacks/cfile.txt']

let data = []

fs.readFile(files[0], (err, contents) => {
  if (err) {
    console.error(err)
    return err
  }
  data.push(contents)

  fs.readFile(files[1], (err, contents) => {
    if (err) {
      console.error(err)
      return
    }
    data.push(contents)

    fs.readFile(files[2], (err, contents) => {
      if (err) {
        console.error(err)
        return err
      }
      data.push(contents)
      console.log(Buffer.concat(data).toString())
    })
  })
})