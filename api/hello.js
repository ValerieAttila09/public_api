import express from 'express';
const app = express();

app.get('/api/hello', (req, req) => {
  res.json({
    message: "Hello from Express on Vercel!"
  });
});

export default app;