const net = require('net')
const strftime = require('strftime')

const server = net.createServer((socket) => {
  const d = new Date()
  const formattedTime = strftime('%Y-%m-%d %H:%M', d)
  socket.write(`${formattedTime}\n`)
  socket.end()
  socket.on('error', (err) => {
    return console.error(err)
  })
})

server.listen(process.argv[2])
