
let obj1 = {
  a: 1,
  b: 2,
  c: 3,
}

let {a, ...m} = obj1
console.log(a) // 1
console.log(m) // { b: 2, c: 3 }

let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };
console.log(rect) // { x: 0, y: 0, width: 100, height: 75 }

let x = [1, 2, 3];
let b = [0, ...x, 4];  // b == [0, 1, 2, 3, 4]