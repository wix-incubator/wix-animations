const path = require('path');
const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(process.env.PORT);
