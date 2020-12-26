const fs = require('fs')
const fsPromises = fs.promises
const readFile = fsPromises.readFile

const files = ['../../serial-callbacks/afile.txt', '../../serial-callbacks/bfile.txt', '../../serial-callbacks/cfile.txt']

let data = []
let count = files.length

let index = 0

// This recurive function may not be a good function. because async function (Promises) 
// do not block. If you want async function to block in recusrsion then return promise in then.
// However function read itself is not an async function and will block if called recursively, thats why below function will give expected output.
const read = (file) => {
  let p = readFile(file)
    .then((p) => {
      index += 1;
      if (index < count) {
        read(files[index]);
        // we can't simply take advantage of call stack pop-up in recursive calls to reverse things
        // in async functions. because async functions do not block like sync functions
        data.push(p);
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
