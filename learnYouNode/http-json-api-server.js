const http = require('http')

http.createServer((req, res) => {
  let response = ''
  const url = new URL(req.url, `http://${req.headers.host}`)
  if (url.pathname === '/api/parsetime') {
    const date = url.searchParams.get('iso')
    const d = new Date(date)
    response = JSON.stringify({ hour: d.getHours(),
                      minute: d.getMinutes(),
                      second: d.getSeconds()})
  }
  if (url.pathname === '/api/unixtime') {
    const date = url.searchParams.get('iso')
    const d = new Date(date)
    response = JSON.stringify({unixtime: d.getTime()})
  }
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.write(response)
  res.end()
}).listen(Number(process.argv[2]))