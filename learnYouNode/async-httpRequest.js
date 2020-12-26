const http = require('http')

const host = process.argv[2]
const port = process.argv[3]

const httpData = (postedData, options) => {

  const getOptions = { method: 'GET'}
  return new Promise((resolve, reject) => {
    const clientReq = http.request(options, (res) => {
      res.setEncoding('utf8')
      let rawData = ''
      res.on("data", (chunk) => {
        rawData += chunk 
      })
      res.on('end', () => {
        resolve(rawData)
      })
    })
    clientReq.on('error', (err) => {
      reject(err)
    })
    if (options['method'] === "POST") {
      clientReq.write(postedData);
    }
    clientReq.end();
  })
}

async function postAlldata() {
  for (let i = 1; i <= 5; i++) {
    let postedData = JSON.stringify({ user_id: i })
    let postOptions = { method: 'POST', hostname: host, port: port, path: '/users/create', headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postedData)
      }
    }
    await httpData(postedData, postOptions)
  }
}

async function getResults() {
  const getOptions = { method: 'GET', hostname: host, port: port, path: '/users'}
  try {
    await postAlldata()
    data = await httpData("", getOptions)
    return data
  } catch (err) {
    return err
  }
}

getResults().then((data) => console.log(data)).catch((err) => console.log(err))
