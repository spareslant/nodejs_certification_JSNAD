const { spawn } = require('child_process')
const path = require('path')


if (process.env.IS_CHILD) {
  console.log('child process: ', process.cwd())
} else {
  const {root: parent_root_dir} = path.parse(process.cwd())
  const child = spawn(process.execPath, [__filename], {
    env: {
      IS_CHILD: "1",
    },
    cwd: parent_root_dir
  });

  console.log("Parent process: ", process.cwd());

  child.stdout.pipe(process.stdout);
}