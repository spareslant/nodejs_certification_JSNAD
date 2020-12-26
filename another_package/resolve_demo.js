console.group("==== package resoluton =====")
console.log(`pine =>`, require.resolve('pino'))
console.log(`current dir =>`, require.resolve('.'))
console.log(`file =>`, require.resolve('./format'))
console.log(`system module fs =>`, require.resolve('fs'))
console.groupEnd("==== group end ====")

