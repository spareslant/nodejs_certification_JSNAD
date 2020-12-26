const { readFile } = require('fs').promises

const files = ['file1.txt', 'file2.txt', 'file3.txt']

const run = async () => {
  let data = []
  for (let file of files) {
    data.push(await readFile(file))
  }
  return data
}

const run2 = async () => {
  let all_reads = files.map((file) => {
    return readFile(file)
  })
  return await Promise.all(all_reads)
}

const run3 = async () => {
  let all_readers = files.map((file) => readFile(file))
  let results = await Promise.allSettled(all_readers)
  let data = results
  .filter((reader) => reader.status === 'fulfilled')
  .map((p) => p.value)
  return data
}

run3()
  .then((data) => console.log(Buffer.concat(data).toString()))
  .catch(console.error)