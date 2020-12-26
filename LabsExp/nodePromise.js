const {readFile, readdir} = require('fs').promises

readFile(__filename)
.then((contents) => console.log(contents.toString()))
.catch((err) => conslole.log(err))

readdir(".")
.then((contents) => console.log(contents))
.catch((err) => console.log(err))