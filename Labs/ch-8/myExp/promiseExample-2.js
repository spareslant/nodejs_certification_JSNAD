async function foo() {
  console.log("Inside foo .....")
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promise resolved after 2 secs")
      resolve("p promise is resolved now.")
    }, 2000)
  })
  await p
  console.log("=== after the promise is resolved ======")
}

console.log("==main===")
foo()
console.log("==== end ====")