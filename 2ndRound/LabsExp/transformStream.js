const { Transform, pipeline } = require('stream')
const { scrypt } = require('crypto')
const net = require('net')

const createEncryptStream = () => {
  return new Transform({
    encoding: "hex",
    decodeStrings: false,
    transform(chunk, enc, next) {
      scrypt(chunk, "a-salt", 32, (err, key) => {
        if (err) {
          next(err, null);
          return;
        }
        next(null, key);
      });
    },
  });
};

const createUpperStream = () => {
  return new Transform({
    objectMode: true,
    transform(chunk, enc, next) {
      next(null, chunk.toString().toUpperCase())
    }
  })
}

// const server = net.createServer((socket) => {
//   const encryptData = createEncryptStream()
//   socket.on('data', (chunk) => {
//     console.log(chunk.toString())
//     encryptData.write(chunk)
//     encryptData.on('data', (encData) => {
//       socket.write(encData)
//       socket.end()
//     })
//     encryptData.end()
//   })
// })

const server = net.createServer((socket) => {
  const encryptData = createEncryptStream()
  const upperData = createUpperStream()
  pipeline(socket, encryptData, socket, (err, value) => {
    if (err) {
      console.log(err)
      return
    } else {
      console.log('data has been written.')
    }
  })
})

server.listen(3000)


// const t = createTransformStream()
// t.on('data', (chunk) => {
//   console.log(chunk.toString())
// })
// t.write('yahoo')
// t.write('hotmail')
// t.end('done')