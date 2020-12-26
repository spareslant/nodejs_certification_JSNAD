const fs = require('fs')
const util = require('util')


const files = ['file1.txt', 'file2.txt', 'file3.txt', 'nonExistentFile']

const run = () => {
  return new Promise((resolve, reject) => {
    let index = 0;
    const print = (err, contents) => {
      index += 1
      if (err) {
        // console.error(err);
        //if (index === files.length) {
          reject(`woho...promise rejected....`)
          return
        //}
        return
      }
      console.log(contents.toString());
      if (index === files.length) {
        resolve('done')
      }
    };

    files.forEach((file) => {
      fs.readFile(file, print);
    });

  });
};

const run2 = (cb) => {
    let index = 0;
    const print = (err, contents) => {
      index += 1
      if (err) {
        console.error(err);
        // if (index === files.length) {
          cb('error', null)
          return
        // }
        return;
      }
      console.log(contents.toString());
      if (index === files.length) {
        cb(null, 'done')
      }
    };

    files.forEach((file) => {
      fs.readFile(file, print);
    });
    
};

// run()
//   .then((result) => console.log(result) )
//   .catch((err) => console.error('inside catch....', err))

// run2((err, result) => {
//   console.log("result = ", result)
//   console.log("error = ", err)
// })

const p_run2 = util.promisify(run2)
p_run2()
  .then((data) => console.log("result = ", data))
  .catch((err) => console.error("error = ", err))