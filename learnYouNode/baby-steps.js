// let sum = 0
// for( let i=2; i < process.argv.length; i++ ) {
//   sum += Number(process.argv[i])
// }
// console.log(sum)


// ===================================

const arr = process.argv.slice(2)

const result = arr.reduce((acc, cv, ci, src)  => {
  acc = Number(acc) + Number(cv)
  return acc
})

console.log(result)