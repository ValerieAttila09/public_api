import ServerlessHttp from 'serverless-http';
import app from '../express-app.mjs';

export const handler = ServerlessHttp(app)