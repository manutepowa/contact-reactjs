'use strict'
const path = require('path');
const express = require('express');
const app = express();

app.use('/', express.static(path.join(__dirname, '/build')));

app.listen(3001, () => { 
  console.log('Listening port: 3001');
});