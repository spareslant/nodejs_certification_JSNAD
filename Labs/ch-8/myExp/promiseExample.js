let p = new Promise((resolve, reject) => {
  console.log("inside promise executor")
  setTimeout(resolve, 2000)
})

setTimeout(() => {
  console.log(p);
  console.log("yahoo....")}, 0)

async function foo() {
  console.log("inside foo...")
  throw new Error("hotmail")
  //return Promise.reject(4)
}

foo().then((value) => {
  console.log(value)
}).catch((err) => {
  console.log("ERROR=",err.message)
})