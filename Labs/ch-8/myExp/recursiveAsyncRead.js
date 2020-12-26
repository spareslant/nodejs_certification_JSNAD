const fs = require('fs')

const files = ['../../serial-callbacks/afile.txt', '../../serial-callbacks/bfile.txt', '../../serial-callbacks/cfile.txt']

let data = []

let index = 0

const read = (file) => {
  fs.readFile(file, (err, contents) => {
    if (err) {
      console.error(err);
      return err;
    }
    index += 1
    data.push(contents);
    if (index < files.length) {
      read(files[index])
    } else {
      console.log(Buffer.concat(data).toString())
    }
  });
}

read(files[index])