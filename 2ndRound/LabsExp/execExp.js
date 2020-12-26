const { execSync } = require('child_process')

try {
  const output = execSync(`ls -l /yaooo`)
  console.log(output.toString())
} catch (err) {
  console.log(err.stderr.toString())
}

const output2 = execSync(`${process.execPath} -e "console.log('I am in subprocess')"`)

console.log(output2.toString())