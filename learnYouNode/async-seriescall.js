const http = require('http')

const urls = process.argv.slice(2)

const getHttpData = (url) => {
  return new Promise((resolve, reject) => {
    const clientReq = http.get(url, (res) => {
      res.setEncoding("utf8");

      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        resolve(data)
      })
    })

    clientReq.on('error', (err) => {
      reject(err)
    })
  })
}

async function getAlldata() {
    data = {}
    try {
      data['requestOne'] = await getHttpData(urls[0])
      data['requestTwo'] = await getHttpData(urls[1])
    } catch (err) {
      return err
    }
    return data
}

async function getAlldataDifferently() {
  data = ''
  for(let i = 0; i < urls.length; i++) {
    try {
      data += await getHttpData(urls[i])
    } catch (err) {
      return err
    }
  }  
  return data
}

getAlldata().then((data) => console.log(data)).catch((err) => console.log(err))
// getAlldataDifferently().then((data) => console.log(data)).catch((err) => console.log(err))