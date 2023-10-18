


import create from "create";
import udelete from "udelete";
import read from "read";
import update from "update";


var msg = 'Hello World';
console.log(msg);

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});

