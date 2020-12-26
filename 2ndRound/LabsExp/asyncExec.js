const { exec } = require('child_process')

exec(`${process.execPath} -e "console.log('STDOUT...'); throw new Error('BBBB')"`,
  (err, stdout, stderr) => {
    console.log('err = ', err)
    console.log('stdout = ', stdout.toString())
    console.log('stderr = ', stderr.toString())
  })