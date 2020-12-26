
function func1() {
  return function(num) {
    console.log(this.id + num)
  }
}

function func2() {
  return (num) => {
    console.log(this.id + num)
  }
}

let obj1 = { id: 99}

let retFunc1 = func1.call(obj1)
retFunc1(1) // prints NaN
console.log('============')
let retFunc2 = func2.call(obj1)
retFunc2(1) // prints 100