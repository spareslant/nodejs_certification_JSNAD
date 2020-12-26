const listFiles = require('./mymodule')
const dir = process.argv[2]
const ext = process.argv[3]

listFiles(dir, ext, (err, files) => {
  if (err) {
    return console.error(err)
  }
  files.forEach(function(file) {
    console.log(file)
  })
})