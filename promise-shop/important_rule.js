const alwaysThrows = () => {
  throw new Error("OH NOES")
}

const iterate = (arg) => {
  console.log(arg)
  return arg + 1
}

async function calculate() {
  let result = await Promise.resolve(iterate(1))
  for (let i = 0; i < 10; i++) {
    try {
      if ( i == 4) {
        alwaysThrows()
      }
      result = await Promise.resolve(iterate(result))
    } catch (err) {
      throw err
    }
  }
}

calculate().then(null, (err) => console.log(err.message))