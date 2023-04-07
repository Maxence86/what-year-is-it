var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// const yearElement = document.getElementById("year");
// fetch('http://localhost:3000/year')
//   .then(response => response.json())
//   .then(data => yearElement.innerText = data.year)
//   .catch(error => console.error(error));


module.exports = app;
