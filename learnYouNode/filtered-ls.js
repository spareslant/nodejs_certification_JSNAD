const {readdir} = require('fs')

const dir = process.argv[2]
const ext = process.argv[3]

readdir(dir , (err, files) => {
  if (err) {
    console.log(err)
    return
  }
  const pattern = new RegExp(`\.${ext}$`)
  files.forEach((file, index) => {
    file.match(pattern) && console.log(file)
  })

})