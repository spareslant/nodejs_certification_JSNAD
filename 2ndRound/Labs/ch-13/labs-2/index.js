'use strict'
const assert = require('assert')
const { join, basename } = require('path')
const path = require('path')
const fs = require('fs')
const project = join(__dirname, 'project')
try { fs.rmdirSync(project, {recursive: true}) } catch (err) {}
const files = Array.from(Array(5), () => {
  return join(project, Math.random().toString(36).slice(2))
})
fs.mkdirSync(project)
for (const f of files) fs.closeSync(fs.openSync(f, 'w'))

const out = join(__dirname, 'out.txt')

function exercise () {
  // TODO read the files in the project folder
  // and write the to the out.txt file
  const files = fs.readdirSync('project')
  // let sorted_files = files.sort((file1, file2) => fs.statSync(path.resolve(__dirname, 'project', file1)).birthtimeMs - fs.statSync(path.resolve(__dirname, 'project', file2)).birthtimeMs)
  let sorted_files = files.sort((file1, file2) => fs.statSync(path.resolve(__dirname, 'project', file1)).mtimeMs - fs.statSync(path.resolve(__dirname, 'project', file2)).mtimeMs)
  const filesStr = files.join(',')
  fs.writeFileSync(out, filesStr)
}

exercise()
assert.deepStrictEqual(
  fs.readFileSync(out).toString().split(',').map((s) => s.trim()),
  files.map((f) => basename(f))
)
console.log('passed!')