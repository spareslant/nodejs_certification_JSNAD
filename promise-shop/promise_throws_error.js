const parsePromised = (json) => {
  return new Promise((resolve, reject) => {
    try {
      const result = JSON.parse(json)
      resolve(result)
    } catch (err) {
      reject(err)
    }
  })
}


function onReject(error) {
  console.log(error.message);
}

parsePromised(process.argv[2]).then(null, onReject)