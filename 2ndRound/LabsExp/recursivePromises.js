
let sum = 0

const recursiveCall = (index) => {
  return new Promise((resolve) => {
      // console.log(index);
      if (index <= 3) {
          sum = sum + index
          // console.log("sum=", sum)
          return resolve(recursiveCall(++index))
      } else {
          return resolve(sum)
      }
  })
}

recursiveCall(0)
  .then((contents) => console.log("=====", contents))
  .catch(console.error)