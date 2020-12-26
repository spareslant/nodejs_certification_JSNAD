const attachTitle = (name) => {
  return 'DR. ' + name
}

Promise.resolve('MANHATTAN')
.then(attachTitle)
.then((result) => console.log(result))