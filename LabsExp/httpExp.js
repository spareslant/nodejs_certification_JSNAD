const {createServer}= require('http')
const {readdirSync} = require('fs')
const {Readable, pipeline, Transform} = require('stream')

const transform = () => {
  let initDelmiter = '[\n'
  const trans = new Transform({
    transform(chunk, enc, callback) {
      chunk = initDelmiter + chunk
      callback(null, chunk)
      initDelmiter = ',\n'
    },
    final(callback) {
      this.push('\n]\n')
      callback()
    }
  })
  return trans
}

createServer((req, res) => {
  const dirs = Readable.from(readdirSync(__dirname))
  // dirs.on('data', (data) => {
  //   res.write(data + '\n')
  // })
  // dirs.on('end', () => res.end())
  const jsonTrans = transform() 
  pipeline(dirs, jsonTrans, res, (err) => {
    console.error(err)
  })
}).listen(3000)