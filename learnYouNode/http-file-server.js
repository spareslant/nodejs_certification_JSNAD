const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const file = process.argv[3]

const server = http.createServer((req, res) => {
  const fStream = fs.createReadStream(file)
  res.writeHead(200, {'Content-Type': 'text/plain'})
  fStream.pipe(res)
  // res.end()
})

server.listen(Number(process.argv[2]))