const { spawn } = require('child_process')

spawn('find', ['.'], {stdio: 'inherit'})