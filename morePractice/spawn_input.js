const { spawn } = require('child_process')

const wc = spawn('wc')

wc.stdin.write("yahoo")
wc.stdin.end()
wc.stdout.pipe(process.stdout)