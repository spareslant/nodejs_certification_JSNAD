const { spawn } = require('child_process')

process.env.MY_VAR = 'YAHOOOO'

const child = spawn(process.execPath, ['-p', 'process.env'], {
  env: { SUBPROCESS_SPECIFIC: process.env.MY_VAR}
})

child.stdout.pipe(process.stdout)

const { IS_CHILD } = process.env

console.log(IS_CHILD)