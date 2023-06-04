const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multer = require('multer');
const upload = multer();

const connectToDatabase = require('./database/mongodb');
const indexRouter = require('./routes/indexRouter');
const subscriberRouter = require('./routes/subscriberRouter');

const app = express();
connectToDatabase();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(upload.any());

app.use('/', indexRouter);
app.use('/subscriber', subscriberRouter);

app.use(function(req, res, next) {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
