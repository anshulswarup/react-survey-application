const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ bye: 'AnshulSaxena you are my Buddy!!!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
