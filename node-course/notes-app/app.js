const add = require('./utils.js');  // import from another Js file --  
const notes = require('./notes.js');

const fs = require('fs');


fs.writeFileSync('notes.txt', 'Welcome to Node.');

fs.appendFileSync('notes.txt', ' From now we are look for new job.');

const sum = add(2, 3);  // declare sum and call func from another file
console.log(sum);

const getNote = notes();

console.log(getNote);




