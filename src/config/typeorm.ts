import {createConnection} from 'typeorm'
import path from 'path'

export async function connect() {
  await createConnection({
  "type": "mongodb",
  "url": "mongodb+srv://Tony:elpassword@keystone.nyhel.mongodb.net/Keystone?retryWrites=true&w=majority",
  "useNewUrlParser": true,
  "synchronize": true,
  "logging": true,
  "entities": ["src/entity/*.*"]
});
  console.log('Database is Connected')
}