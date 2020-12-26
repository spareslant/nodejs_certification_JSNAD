const {readFile} = require('fs').promises
const fs = require('fs')

// const files = fs.readdirSync(".").filter((filename) => /\.txt$/.test(filename))
const files = ['afile.txt', 'bfile.txt', 'yahoo']
console.log(files)

const readers = files.map((file) => readFile(file))

Promise.allSettled(readers)
.then((result) => {
  //console.log(result)
  const successfullRead = result.filter((obj) => obj.status === 'fulfilled').map((obj) => obj.value)

  console.log(Buffer.concat(successfullRead).toString())
})
.catch(console.error)
