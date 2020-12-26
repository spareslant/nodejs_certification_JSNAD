const {readFile} = require('fs').promises
const fs = require('fs')
// const files = Array(3).fill(__filename)

// files = fs.readdirSync(".").filter((filename) => /\.txt$/.test(filename))
files = ['hotmail', 'afile.txt', 'bfile.txt', 'yahoo']

console.log(files)

let index = 0
const read = (index) => {
  readFile(files[index]).then((contents) => {
    console.log(contents.toString());
    index = index + 1
    if (index < files.length) {
      read(index)
    }
  }).catch(console.error);
};

read(0)
console.log("==== Finished ========")
