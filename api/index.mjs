import serverless from 'serverless-http';
import app from '../express-app.mjs';

const getApp = () => serverless(app);

export default getApp();