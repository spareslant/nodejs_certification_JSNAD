function Shape() {
  this.x = 0
  this.y = 0
}

Shape.prototype.move = function(x, y) {
  this.x += x
  this.y += y
  console.info('Shape moved...')
}

function Rectangle() {
  Shape.call(this)
}

Rectangle.prototype = Object.create(Shape.prototype, {
  type: {
    value: "This is Rectangle"
  },
  description: {
    value: function() {
      console.log("I am a rectangle")
    },
    enumerable: true
  }
})

Rectangle.prototype.rectMethod = function() {
  console.log("rectMethod called by: ", this)
}

Rectangle.prototype.constructor = Rectangle

function Square() {
  Rectangle.call(this)
}

Square.prototype = Object.create(Rectangle.prototype, {
  type: {
    value: "This is Square"
  },
  aboutMe: {
    value: function() {
      console.log("I am a sqaure")
    }
  }
})

Square.prototype.constructor = Square

let rect = new Rectangle();

console.log(rect instanceof Rectangle)
console.log(rect instanceof Shape)

rect.move()
console.log(rect.type)
rect.description()
rect.rectMethod()
console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(rect), 'rectMethod'))
console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(rect), 'type'))
console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(rect), 'description'))

console.log('===============================')
let sq = new Square()
sq.move()
sq.description()
sq.aboutMe()
console.log(sq.type)
sq.rectMethod()
console.log('===============================')
console.log(Object.getPrototypeOf(Shape.prototype))
console.log(Object.getPrototypeOf({}))
console.log(Object.getPrototypeOf(rect))
console.log(Object.getPrototypeOf(sq))
console.log('===============================')
console.log(sq.valueOf())

