const { spawnSync, spawn } = require('child_process')

const output = spawnSync(process.execPath, ["-e", "console.log('subprocess stdout..'); throw new Error('subprocess error')"])

// console.log(output)

const child = spawn(process.execPath, ["-e", "console.log('yahoo....'); throw new Error('subprocess error.....')"])

child.stdout.pipe(process.stdout)
child.stderr.pipe(process.stderr)

child.on('exit', (status) => {
  console.log(`exit code = ${status}`)
})