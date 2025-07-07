import serverless from 'serverless-http';
import app from '../express-app.mjs';

export const handler = serverless(app)