const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title)

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes);
    console.log(`New note added`);
  } else {
    console.log(`Note title taken`);
  }
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return []
  }
}


const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
}


const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title)

  if (notes.length > notesToKeep.length) {
    console.log(chalk.bgGreen(`Note removed`));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.bgRed(`No note was found`));
  }
}


const listNotes = () => {
  const notesList = loadNotes();
  notesList.forEach((note) => {
    console.log(chalk.bgCyan(`You have ${note.title}`));
  }
  )
}

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title)
  if (note) {
    console.log(chalk.bgBlue(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red(`Note not found`));
  }
}


module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};



//Mindhunter - Season 1 - Mp4 x264 AC3 1080p