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



//  Customize version 
yargs.version('1.0.2');

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
