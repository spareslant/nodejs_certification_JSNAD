const { readdirSync } = require('fs')
const path = require('path')

const files = readdirSync('.')

full_path_files = files.map((file) => path.join(__dirname, file))

const filtered_files = full_path_files.filter((file) => file !== __filename)
console.log(filtered_files)

