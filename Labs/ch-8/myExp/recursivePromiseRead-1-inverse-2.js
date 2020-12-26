const fs = require('fs')
const fsPromises = fs.promises
const readFile = fsPromises.readFile

const files = ['../../serial-callbacks/afile.txt', '../../serial-callbacks/bfile.txt', '../../serial-callbacks/cfile.txt']

let data = []
let count = files.length

let index = count - 1

// This recurive function may not be a good function. because async function (Promises) 
// do not block. If you want async function to block in recusrsion then return promise in then.
// However function read itself is not an async function and will block if called recursively, thats why below function will give expected output.
const read = (file) => {
  let p = readFile(file)
    .then((p) => {
      data.push(p);
      index -= 1;
      if (index >= 0) {
        read(files[index]);
      } else {
        console.log(Buffer.concat(data).toString());
      }
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
};

read(files[index])
