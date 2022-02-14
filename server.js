const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// get the routes
app.use('/', routes)


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});