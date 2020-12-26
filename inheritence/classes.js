
class Human {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getName() {
    return this.name;
  }

}

class Employee extends Human {
  constructor(name, age, address, salary) {
    super(name, age, address);
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }
}

h1 = new Employee("abc", "40", "mycity", 999999);
console.log(h1);
console.log(h1.constructor);
console.log(Employee.prototype.constructor);
//console.log(Human.prototype);
console.log(h1.constructor.prototype.constructor);
console.log(h1.prototype);
console.log(h1.__proto__);

// console.log("===============");
// function Yahoo(name) {
//   this.name = name;
// }
// let y = new Yahoo("abc");
// console.log(Yahoo.prototype);
// console.log(y.constructor);
// console.log(y.__proto__);
// console.log(Yahoo.prototype.constructor);

// console.log("===================");
// class Hotmail {
//   constructor(name) {
//     this.name = name;
//   }
//   locate() {
//     console.log("prototype", this);
//   }
//   static locate() {
//     console.log("static method of class", this);
//   }
// }
// h = new Hotmail("abc");
// console.log(Hotmail.prototype);
// console.log(h.constructor);
// console.log(h.__proto__);
// console.log(Hotmail.prototype.constructor);
// console.log("********");
// Hotmail.prototype.locate();
// h.locate();
// Hotmail.locate();

// console.log("++++++++++++++++++++");
// function* genfunc() {
//   console.log("Inside generator...");
// }
// let gen = genfunc();
// gen.next();
// console.log("===========================");
// function* newGen() {
//   yield 'hello';
//   yield 'abc';
//   return 'Pal';
// }

// let g = newGen();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log("-----------------");
// const target = {
//   id: 'target'
// };
// console.log(target.hasOwnProperty('id'));