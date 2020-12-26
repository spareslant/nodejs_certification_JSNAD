let multiLine = `This is a multiline comment.
Will this work.
We have to see that.
may be it will work.`


let  match = /comment.*Will/s.test(multiLine)
console.log(`match = ${match}`)

match = /comment.*WILL/si.test(multiLine)
console.log(`match = ${match}`)

match = /comment.*Will/.test(multiLine)
console.log(`match = ${match}`)

match = /^Will/.test(multiLine)
console.log(`match = ${match}`)

match = /Will/.test(multiLine)
console.log(`match = ${match}`)

match = /^Will/m.test(multiLine)
console.log(`match = ${match}`)

match = /com.*^Will/m.test(multiLine)
console.log(`match = ${match}`)

match = /com.*[^]Will/.test(multiLine)
console.log(`match = ${match}`)

match = /com.*[^]Will/m.test(multiLine)
console.log(`match = ${match}`)

match = /com.*[^]Will/s.test(multiLine)
console.log(`match = ${match}`)

match = /this/.exec(multiLine)
console.log(`match=`, match)

match = /(?<yahoo>work)/.exec(multiLine)
console.log(`match = `, match)
