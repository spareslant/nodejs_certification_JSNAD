const fs = require('fs')

const print = (err, contents) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(contents.toString())
}

const readAfile = (file, timeout) => {
  setTimeout(fs.readFile, timeout, file, print)
}


const getTextFiles = () => {
  return new Promise((resolve, reject) => {
    fs.readdir(".", (err, files) => {
      allTextFiles = files.filter((file) => {
        return /\.txt$/.test(file);
      })
      resolve(allTextFiles)
    })
  })
}

const getTextFilesPart2 = () => {
  fs.readdir(".", (err, files) => {
    allTextFiles = files.filter((file) => {
      return /\.txt$/.test(file);
    })
    console.log("part222222 = ", allTextFiles)
    return allTextFiles
  })
}

getTextFiles().then((result) => {
  console.log(result)
}).catch((err) => {
  console.error(err)
})

console.log(`part2 = `, getTextFilesPart2())

//console.log(`Text files = ${allTextFiles}`)

console.log("======starting main============")
//readAfile(__filename, 2000)
console.log("======Finishing main============")
