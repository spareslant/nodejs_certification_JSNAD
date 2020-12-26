const EventEmitter = require('events')

const myEvent = new EventEmitter()

myEvent.on('yahoo', (name) => {
  console.log(`Name is ${name}`)
})
myEvent.emit('yahoo', 'abc')
