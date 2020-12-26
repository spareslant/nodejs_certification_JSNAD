const series = require('fastseries')()
 
series(
  {}, // what will be this in the functions
  [something, something, something], // functions to call
  42, // the first argument of the functions
  done // the function to be called when the series ends
)
 
function late (arg, cb) {
  console.log('finishing', arg)
  cb(null, 'myresult-' + arg)
}
 
function something (arg, cb) {
  setTimeout(late, 2000, arg, cb)
}
 
function done (err, results) {
  console.log('series completed, results:', results)
}