const fs = require('fs')
const path = require('path')

const listFiles = (dir, ext, callback) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return callback(err)
    }
    reqFiles = files.filter(file => path.extname(file) === "." + ext)
    callback(null, reqFiles)
  })
}
module.exports = listFiles