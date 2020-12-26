// const {execSync} = require('child_process')

// const output = execSync(`node -e "console.log('subprocess output.')"`)
// console.log(output.toString())
// console.log("done")

// try {
//   const out = execSync(`${process.execPath} -e "throw new Error('kaboom')"`);
// } catch (err) {
//   console.log(err.output[2])
// }

// const {exec} = require('child_process')

// exec(`${process.execPath} -e "console.log('yahoooo'); throw new Error('kabooomm..')"`,
//   (err, stdout, stderr) => {
//     console.log(`subprocess stdout: ${stdout}`)
//     console.error(`subprocess stdout: ${stderr}`)
//   }
// )

//const {spawnSync} = require('child_process')
// const result = spawnSync(process.execPath, [`-e`, `console.log('yahooo'); throw new Error("kabooom")`])
// console.log(result)

// const {spawn} = require('child_process')
// const sp = spawn(process.execPath, [`-e`, `console.log('yahooo')`])
// // const sp = spawn(`ls`)
// console.log('pid is: ', sp.pid)

// sp.stdout.pipe(process.stdout)

// sp.on('close', (status) => {
//   console.log('exit status was: ', status)
// })

const { spawn } = require('child_process')
const sp = spawn(
  process.execPath,
  [
   '-e',
   `console.error('err output'); process.stdin.pipe(process.stdout)`
  ],
  { stdio: ['pipe', 'pipe', 'pipe'] }
)

sp.stdout.pipe(process.stdout)
sp.stderr.pipe(process.stdout)
sp.stdin.write('this input will become output\n')
sp.stdin.end()