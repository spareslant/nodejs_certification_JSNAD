const http = require('http')
const fs = require('fs')

// fs.readFile(process.argv[2], 'utf8', (err, data) => {
//   if (err) {
//     return console.error(err)
//   }

//   url = data.toString().trim()
  
//   http.get(url.toString(), (res) => {
//     res.setEncoding('utf8')
//     res.on('data', (data) => {
//       console.log(data)
//     })
//   })
// })

file = process.argv[2]

const getHTTPContents = (url) => {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      res.setEncoding("utf8");
      // console.log(url)
      res.on("data", (data) => {
        resolve(data);
      });
      res.on("error", (err) => {
        reject(err);
      });
    });
  });
};

async function getContents() {
  let url
  try {
  url  = await fs.promises.readFile(file, "utf8")
  } catch (err) {
    // console.error("could not read file:", file)
    return err
  }
  url = url.toString().trim();
  const contents = await getHTTPContents(url)
  return contents
}

getContents().then((data) => console.log(data)).catch((err) => console.log(err))
