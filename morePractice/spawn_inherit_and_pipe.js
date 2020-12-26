const {spawn} = require('child_process')

const child = spawn(process.execPath,
  [ '-e', `console.error('err output'); process.stdin.pipe(process.stdout)`],
  {stdio: ['pipe', 'inherit', 'inherit']})

// const child = spawn(process.execPath,
//   [ '-e', `console.error('err output'); process.stdin.pipe(process.stdout)`],
//   {stdio: ['pipe', 'pipe', 'pipe']})

child.stdin.write("input to child")
child.stdin.end()
