require('dotenv').config()

const API_KEY = process.env.API_KEY;
const DATABASE_URL = process.env.DATABASE_URL;

module.exports = {
  API_KEY,
  DATABASE_URL,
}
