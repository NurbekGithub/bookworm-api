var bcrypt = require('bcrypt');

var hash = bcrypt.hashSync('12345', 10);

console.log(hash);