
first()
.then((result) => second(result))
.then((result) => console.log(result))