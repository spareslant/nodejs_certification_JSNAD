const {readFile} = require('fs')

const [filea, fileb, filec] = Array(3).fill(__filename)
const print = (err, contents) => {

  if (err) {
    console.error(err)
    return
  }
  console.log(contents.toString())
}

//readFile(filea, print)
//readFile(fileb, print)
//readFile(filec, print)

readFile(filea, (err, contents) => {
  print(err, contents)
  readFile(fileb, (err, contents) => {
    print(err, contents)
    readFile(filec, (err, contents) => {
      print(err, contents)
    })
  })
})
