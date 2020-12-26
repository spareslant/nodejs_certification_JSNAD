class Person {
  constructor(_name) {
    this._name = _name
  }
  get address() {
    return this.addr
  }
  set address(addr) {
    this.addr = addr
  }
  get name() {
    return this._name
  }
  static describe() {
    console.log('I am a static method in Person class')
  }
}

class Employee extends Person {
  constructor(name) {
    super(name)
  }
  get company() {
    return this.company
  }
  set company(company) {
    this.company = company
  }
  get salary() {
    return this.salary
  }
  set salary(salary) {
    this.salary = salary
  }
}

class Manager extends Employee {
  constructor(name) {
    super(name)
  }
  set bonus(bonus) {
    this.bonus = bonus
  }
  get bonus() {
    return this.bonus
  }
}

let m = new Manager('GP')
m.address = 'Whittaker Road'
console.log(m.address)
console.log(m.name)