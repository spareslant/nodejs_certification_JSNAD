const fs = require('fs')
const fsPromises = fs.promises
const readFile = fsPromises.readFile

const files = ['../../serial-callbacks/afile.txt', '../../serial-callbacks/bfile.txt', '../../serial-callbacks/cfile.txt']

let data = []
let count = files.length

let index = 0

const read = (file) => {
  let pr = readFile(file)
  .then((contents) => {
    data.push(contents);
    index += 1;
    if (index < count) {
      let qr = read(files[index])
      // qr is a promise and is being returned by .then method
      // previous .then method call in recursion will have to wait for this promise to be returned and assigned in above statement.
      // unless qr is returned and assigned .then method will not be considered resolved
      // Hence previous .then method will wait for the resolving of current .then method in recursion. 
      // If qr is not returned, then all the recursive calls for the promise will start executing Simultaneously (and finish) without waiting for the next one to complete.
      console.log(`=====file=${file} read...`)
      return qr
    }
  }).catch((err) => {
    console.error(err);
    return err;
  });
  return pr
};

/*
- Below .then method will not execute unless Promise returned by read(file) is resolved.
- inside read(file), async function readFile is run.
- readFile's .then method calls read(file) again starting a recursive call
- .then method in each recursive call returns a promise for its previous .then call, thus making an implicit .then chain.

read(cfile)
  return cfilePromise  ===> resolved cfilePromise will contain contents of cfile
})
.then((cfilePromiseResult) => { 
  read(bfile)
  return bfilePromise 
})
.then((bfilePromiseResult) => {
  read(afile)
  return afilePromise
})
.then((afilePromiseResult)) => {
  console.log(contents)
})

*/
read(files[index])
.then((contents) => {
  console.log(Buffer.concat(data).toString())
  console.log(contents) // contents will be undefined
})
