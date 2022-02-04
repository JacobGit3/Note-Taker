// Require router and path
const router = require('express').Router();
const path = require('path');

// Notes json and functions
const { createNewNote, validateNote } = require('../lib/notes.js');
const notes = require('../db/db.json')

// GET the saved notes from db folder
router.get('/api/notes', (req, res) => {
  let results = notes;
  res.json(results);
  console.info(notes);
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

// get request to '/'
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// get request to '/notes'
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// get request for any undefined paths
router.get('*', (req, res) => {
  console.info('invalid path')
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;