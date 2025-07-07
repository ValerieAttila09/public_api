const express = require('express');
const app = express();

app.get('/api/hello', (req, req) => {
  res.json({
    message: "Hello from Express on Vercel!"
  });
});

module.exports = app;