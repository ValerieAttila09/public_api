const app = require('../express-app')
const serverless = require('serverless-http');

module.exports.handler = serverless(app)