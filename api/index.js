const serverLess = require('vercel-express')
const app = require('../express-app')

module.exports = serverLess(app)