const { EventEmitter } = require('events')

class myEvent extends EventEmitter {
  constructor(opts = {}) {
    super(opts)
    this.opts = opts
  }
  destroy(err) {
    if (err) {
      this.emit('error', err)
    }
    this.emit('close')
  }
}


const e = new myEvent()

e.on('yahoo', () => {
  console.log('yahoooo....')
})

e.destroy()
e.emit('yahoo')