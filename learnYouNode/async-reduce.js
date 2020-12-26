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
      reject(err);
    })
  })
}

async function getAllData() {
  const queries = ["one", "two", "three"];
  sum = 0
  for (let i = 0; i < queries.length; i++) {
    let url = externalURL + `?number=${queries[i]}`
    try {
      sum += Number(await getHttpData(url))
    } catch (err) {
      return err;
    }
  }
  return sum
}

getAllData().then((data) => console.log(data)).catch((err) => console.error(err))