const { readFile } = require('fs').promises

const files = ['file1.txt', 'file2.txt', 'file3.txt', 'nonExistentFile']

const filePromises = files.map((file) => readFile(file))

// Promise.all(filePromises)
//   .then((data) => console.log(Buffer.concat(data).toString()))
//   .catch((err) => console.error(err))

const print = (results) => {
  results.forEach((p) => {
    if (p.status === 'fulfilled') {
      console.log(p.value.toString())
    }
    if (p.status === 'rejected' ) {
      console.log(p.reason)
    }
  })

}

const print_summary = (results) => {
  let data = results
    .filter((p) => p.status === 'fulfilled')
    .map((p) => p.value)
    console.log(Buffer.concat(data).toString())

  results
    .filter((p) => p.status === 'rejected')
    .forEach((p) => console.log(p.reason))
}

Promise.allSettled(filePromises)
  .then(print_summary)
  .catch((err) => console.error(err))