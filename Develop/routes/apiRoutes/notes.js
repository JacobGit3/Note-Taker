// Require router and notes JSON/API
const router = require('express').Router();
const { createNewNote, validateNote } = require('../../lib/notes.js');
const { notes } = require('../../db/db.json');

// GET the saved notes from db folder
router.get('/api/notes', (req, res) => {
  let results = notes;
  res.json(results);
});

// POST a new note to the notes json in db folder
router.post('/api/notes', (req, res) => {
  req.body.id = notes.length.toString();
  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

module.exports = router;