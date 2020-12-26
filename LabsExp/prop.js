class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  salary() {
    console.log("Salary is: 1000000");
  }

  get address() {
    console.log(`address = ${this.addr}`);
  }

  set address(addr) {
    this.addr = addr;
  }
}

let p = new Person("abc", "20");
p.address = "mycity";

p.salary();

p.hobies = function() {
  console.log("Games");
}

console.log(Object.getOwnPropertyDescriptors(p));
console.log(p.address);

let employee = {
  name: "abc",

  hobies: {
    get() {
      console.log("yahoo");
    },

    set(hobies) {
      console.log(hobies);
    },
  },
};

console.log(Object.getOwnPropertyDescriptors(employee));
console.log("=================");
console.log(Object.getOwnPropertyDescriptor(employee, "hobies"));
