const { spawn } = require('child_process')

const find = spawn('find', ['.', 'type', 'f'])
const wc = spawn('wc')

find.stdout.pipe(wc.stdin)
// wc.stdout.pipe(process.stdout)

wc.stdout.on('data', (data) => {
  console.log(`output = ${data}`)
})
