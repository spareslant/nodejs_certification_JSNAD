const { promisify } = require('util')

const print_me = () => {
  console.log('yahoo...')
  return 'aValue'
}

const promisifyme = (func) => {
  return new Promise((resolve, reject) => {
    console.log("inside promise executor...");
    resolve(func());
  });
};

// pp = promisifyme(print_me)

// pp.then((result) => console.log(result))

console.log('========================')


const doSomething = promisify(print_me)
doSomething().then((data) => console.log(data)).catch(err => console.error(err))