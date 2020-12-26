const http = require('http')

const externalURL = process.argv[2]

const getHttpData = (url) => {
  return new Promise((resolve, reject) => {
    const clientReq = http.get(url, (res) => {
      res.setEncoding("utf8");
      let rawData = "";
      res.on("data", (chunk) => {
        rawData += chunk;
      })
      res.on("end", () => {
        resolve(rawData);
      })
    })
    clientReq.on("error", (err) => {
      reject(err)
    })
  })
}

async function countMeerkat() {
  let count = 0
  while(true) {
    try {
      data = await getHttpData(externalURL)
      count++
      if (data.match(/meerkat/)) {
        return count
      }
    } catch (err) {
      return err
    }
  }
}

countMeerkat().then((data) => console.log(data)).catch((err) => console.log(err))