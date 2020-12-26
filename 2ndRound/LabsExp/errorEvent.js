const { EEXIST } = require('constants')
const EventEmitter = require('events')

const e = new EventEmitter()

e.on('error', () => {
  console.log('error catched...')
})
e.on('yahoo', () => {
  console.log('yahoo.......')
  throw new Error('I am an error....')
})

process.stdin.resume()

e.emit('error')
e.emit('yahoo')