const fs = require('fs');
const path = require('path');

// Create a New note from inputted info
function createNewNote(body, notesArray) {
  // Create note from input
  const note = body;
  // Add it to the notes array
  notesArray.push(note);
  // Write the new notes array to db.json
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notesArray }, null, 2)
  );
  return note;
}

// Validate the note making sure it is all strings
function validateNote(note) {
  // Check if title is not a string
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }
  // Check if text is not a string
  if (!note.text || typeof note.text !== 'string') {
    return false;
  }
  // All are strings, test passed return true
  return true;
}

module.exports = {
  createNewNote,
  validateNote
}