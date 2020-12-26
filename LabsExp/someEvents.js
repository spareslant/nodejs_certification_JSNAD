const {EventEmitter} = require('events')

const e = new EventEmitter()

e.on('yahoo', (greeting) => {console.log(greeting)})
e.on('yahoo', () => {console.log("Another yahooo..")})
e.once('onetime', () => {console.log("onetime")})
e.emit('yahoo', 'hello how are you..')
e.emit('yahoo', 'hello how are you..')
e.emit('yahoo', 'hello how are you..')

process.stdin.resume()
e.on('error', (err) => console.log(err))
e.emit('error', new Error('hmm'))
e.emit('onetime')
e.emit('onetime')
e.emit('onetime')
e.emit('yahoo', 'end of function')