const all = (p1, p2) => {
  let counter = 0
  let results = []
  return new Promise((resolve, reject) => {
    p1.then((value) => {
      results[counter] = value
      counter++
      if (counter == 2) {
        resolve(results)
      }
    })
    p2.then((value) => {
      results[counter] = value
      counter++
      if (counter == 2) {
        resolve(results)
      }
    })
  })
}

all(getPromise1(), getPromise2()).then((result) => console.log(result))