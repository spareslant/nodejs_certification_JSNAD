const http = require('http')
const { Transform } = require('stream')

const transform = new Transform({
  // objectMode: true,
  encoding: 'utf-8',
  transform(chunk, enc, callback) {
    callback(null, chunk.toString().toUpperCase())
  }
})

http.createServer((req, res) => {
  req.pipe(transform).pipe(res)

}).listen(Number(process.argv[2]))