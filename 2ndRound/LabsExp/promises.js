const sleep = require('sleep')

let p1 = new Promise((resolve, reject) => {
  console.log("Running p1...")
  setTimeout(() => {
    console.log('resolving p1')
    resolve(p2)
  }, 2000);
})
let p2 = new Promise((resolve, reject) => {
  console.log("Running p2...")
  setTimeout(() => {
    console.log('resolving p2')
    resolve(p3)
  }, 3000);
})
let p3 = new Promise((resolve, reject) => {
  console.log("Running p3...")
  setTimeout(() => {
    console.log('resolving p3')
    resolve(3)
  }, 1000);
})

// p1 will resolve to p2 , which in turn will resolve to p3, which in turn will resolve to 3, hence p1 will finally resolve to 3
p1.then((data) => {
  console.log('ultimate result => ', data)
})


// const heavyDutyFunc = () => {
//   console.log("Running heavy duty function....")
//   sleep.sleep(5)
//   console.log("Heavy duty function finished.")
//   return "This is return value from heavyduty"
// }

// let p4 = new Promise((resolve, reject) => {
//   console.log("Running p4...")
//   resolve(heavyDutyFunc())
// })
// p4.then((data) => console.log("from then => ", data))
// console.log("yahoooooo")



