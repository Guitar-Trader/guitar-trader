const path = require('path');
const express = require('express');
const app = express();
const port = 4000;

// app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.end('hi');
});

app.listen(port, () => {
  console.log(`Listening at localhost: ${port}`);
});