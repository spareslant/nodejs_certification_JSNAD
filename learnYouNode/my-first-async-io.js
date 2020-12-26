const {readFile} = require('fs')

readFile(process.argv[2], (err, data) => {
  if (err) {
    throw err
  }
  const arr = data.toString().match(/\n/g) || []
  console.log(arr.length)
})

// console.log("=========================")