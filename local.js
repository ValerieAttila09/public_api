const app = require('./express-app');

try {
  app.listen(3000, () => {
    console.log("Running in http://localhost:3000")
  });
} catch (error) {
  console.log("Cannot run server locally!")
}