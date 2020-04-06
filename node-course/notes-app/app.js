/*
  if you delete node_modules or you download this project just install in this dir. via terminal  npm install
    npm will pull all form package.jason what is need to this project
*/

// const validator = require('validator');  // add npm  validator -- npm package
// const add = require('./utils.js');  // import from another Js file --  
const yargs = require('yargs');
const chalk = require('chalk');
// const notes = require('./notes.js');
const fs = require('fs');

fs.writeFileSync('notes.txt', 'Welcome to Node.');
fs.appendFileSync('notes.txt', ' From now we are look for new job.');

// const sum = add(2, 3);  // declare sum and call func from another file
// console.log(sum);

// const getNote = notes();
// console.log(getNote);
// console.log(validator.isEmail('adv@gmail.com'));
// console.log(validator.isURL('https://www.google.com'));  

// console.log(chalk.red('Success is learn new things like Node.js'));
// console.log(chalk.yellow(getNote));

// console.log(chalk.bold.red.bgWhite(`I will learn this full!`)); // more properties on chalk

// console.log(process.argv[2]);

const command = process.argv[2];

// console.log(process.argv);


// if (command === 'add') {
//   console.log(`Adding note`);
// } else if (command === 'remove') {
//   console.log(`Removing note`);
// }


//  Customize version 
yargs.version('1.0.2');


// add remove read list

// create add command 
yargs.command({
  command: 'add',
  describe: 'add new note',
  handler() {
    console.log(`Adding new note`);
  }
})

// create remove  
yargs.command({
  command: 'remove',
  describe: 'Remove note',
  handler() {
    console.log(`Removing note`);
  }
})

// list command 
yargs.command({
  command: 'list',
  describe: 'Listing notes',
  handler() {
    console.log(`Listing all notes`);
  }
})

// read command
yargs.command({
  command: 'read',
  describe: 'Read notes',
  handler() {
    console.log(`Read all notes`);
  }
})

console.log(yargs.argv);
