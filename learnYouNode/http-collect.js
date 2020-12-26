const http = require('http')
const concat = require('concat-stream')

const url = process.argv[2]


// let allData = ''

// http.get(url, (res) => {
//   res.setEncoding('utf8')
//   res.on('data', (data) => {
//     allData += data
//   })
//   res.on('end', () => {
//     console.log(allData.length)
//     console.log(allData)
//   })
// })


http.get(url, (res) => {
  res.setEncoding('utf8')
  res.pipe(concat((data) => {
    console.log(data.length)
    console.log(data)
  }))
  res.on('error', (err) => {
    console.log(err)
  })
})