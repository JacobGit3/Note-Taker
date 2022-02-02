const router = require('express').Router();
const notesRoutes = require('../apiRoutes/notes.js');

router.use(notesRoutes);

module.exports = router;