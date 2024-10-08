// server.js

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, DevOps World!');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`My Node App listening at http://localhost:${port}`);
  });
}

module.exports = app;