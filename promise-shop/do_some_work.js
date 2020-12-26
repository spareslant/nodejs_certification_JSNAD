const http = require("q-io/http")

const read = http.read('http://localhost:7000')

read.then((result) => {
  return http.read('http://localhost:7001/' + result)
}).then((result) => console.log(JSON.parse(result)))