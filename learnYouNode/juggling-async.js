const http = require('http')
const concat = require('concat-stream')

const urls = process.argv.slice(2)

const data = []
let count = 0

const result = () => {
  data.forEach((contents) => {
    console.log(contents)
  })
}

urls.forEach((url, index) => {
  http.get(url, (res) => {
    res.setEncoding('utf8')
    res.on('error', (err) => {
      return console.error(err)
    })
    res.pipe(concat((streamData) => {
      data[index] = streamData
      count++
      if (count === 3) {
        result()
      }
    }))
  })
})