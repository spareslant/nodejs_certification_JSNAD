// const {readFile, writeFile} = require('fs')
// const {readFile, writeFile} = require('fs').promises
// const {join} = require('path')

// readFile(__filename, {encoding: 'utf8'}, (err, contents) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   // console.log(contents)
//   writeFile(join(__dirname, 'yahoo.txt'), contents.toUpperCase(), (err) => {
//     console.error(err)
//   })
// })

// async function run() {
//   contents = await readFile(__filename, { encoding: "utf8" });
//   await writeFile(join(__dirname, "hotmail.txt"), contents.toUpperCase())

// }

// run().catch((err) => console.error(err))

const {pipeline, Transform} = require('stream')
const {createReadStream, createWriteStream} = require('fs')
const {join} = require('path')

const transform = new Transform({
  transform(chunk, enc, callback) {
  chunk = chunk.toString().toUpperCase()
  callback(null, chunk)
  }
})

pipeline(createReadStream(__filename),
  transform,
  createWriteStream(join(__dirname, 'another.txt')),
  (err) => {
    console.error(err)
  }
)