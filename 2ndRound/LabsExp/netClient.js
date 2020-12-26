const { finished, pipeline } = require('stream')
const net = require('net')

const conn = net.connect(3000)

conn.on('data', (chunk) => {
  console.log(chunk.toString())
  conn.end()
})

// pipeline(conn, process.stdout, (err) => {
//   if (err) console.log(err)
// })

conn.write('yahoo')