let buffer = Buffer.alloc(10)

function print() {
  console.log(buffer);
  console.log(buffer.length);
  console.log(buffer.toString());
  console.log(String(buffer));
}

function printContents() {
  buffer.filter((value) => value).forEach((element, index) => console.log(`${index} => ${String.fromCharCode(element)}`))
}
print()
console.log("===============")
printContents()
buffer.write("hello")
buffer.write(" there", 5)
printContents()
console.log("===============")
buffer.fill('1')
print()
printContents()
