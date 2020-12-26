const { spawn } = require('child_process')

const child = spawn(process.execPath, ["-e",
   "console.log('child stdout output.'); console.error('child stderr output'); process.stdin.pipe(process.stdout)"], {
     stdio: ['pipe', 'inherit', 'ignore']
   })

// child.stdout.pipe(process.stdout)
// child.stderr.pipe(process.stdout)
child.stdin.write('This is input from parent to child\n')
child.stdin.end()