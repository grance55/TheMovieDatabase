const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');

const PORT = process.env.PORT || 8082;
const db = require('./config/database.js');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

/* CONNECT TO DB */
db.connectDb()
  .then(() => {
    console.log('DB connected...');
  })
  .catch((e) => {
    console.log(`DB CONNECTION FAILED \n${e}`);
  });

app.listen(PORT, () => console.log(`Server is live on port ${PORT}`));
