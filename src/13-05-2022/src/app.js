const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  res.status(200).json('hello!');
});

app.post('/hello', (req, res) => {
  if (req.body.firstName === 'foo') {
    res.set('Content-Type', 'text/plain');
    res.status(400).json('foo não pode ser!');
  } else {
    res.status(200).json({ message: 'outros firstNames funcionam' });
  }
});

module.exports = app;
