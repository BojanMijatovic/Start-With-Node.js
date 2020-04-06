/*
  if you delete node_modules or you download this project just install in this dir. via terminal  npm install
    npm will pull all form package.jason what is need to this project
*/

// const validator = require('validator');  // add npm  validator -- npm package
// const add = require('./utils.js');  // import from another Js file --  
const fs = require('fs');
const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes.js');


// fs.writeFileSync('notes.txt', 'Welcome to Node.');
// fs.appendFileSync('notes.txt', ' From now we are look for new job.');

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
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
})

//   remove   command
yargs.command({
  command: 'remove',
  describe: 'Remove note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
})

// list command 
yargs.command({
  command: 'list',
  describe: 'Listing notes',
  handler() {
    notes.listNotes()
  }
})

// read command
yargs.command({
  command: 'read',
  describe: 'Read note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
})

yargs.parse();
