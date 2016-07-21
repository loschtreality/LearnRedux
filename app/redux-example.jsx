var redux = require('redux');

console.log('Starting redux example');

// Pure function
function add(a,b) {
  return a + b
}


function changeProp(obj) {
  return {
    ...obj,
    name: 'loren'
  }
}


var res = changeProp({
  name: 'michael',
  age: '24'
})

console.log(res);
