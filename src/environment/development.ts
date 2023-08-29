import path from 'path';
import env from "./env.local";

console.log(process.env.TEST);


export default {
  dbUrl: `mongodb+srv://${env.DB_MONGO_USERNAME}:${env.DB_MONGO_PWD}@cluster0.wnkhhb6.mongodb.net/tweets?retryWrites=true&w=majority`,
  cert: path.join(__dirname, '../../ssl/local.crt'),
  key: path.join(__dirname, '../../ssl/local.key'),
  portHttp: 3000,
  portHttps: 3001,
};