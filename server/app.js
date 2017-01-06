var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')

var mysql = require('mysql');
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'angular2_blog'
})
db.connect();

var app = express();
app.use(cors())

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * ============================================================================
 */

app.get('/', (req, res) => {
  res.end()
})

app.get('/authors', (req, res) => {
  db.query('SELECT * FROM authors', function (err, rows, fields) {
    if (err) throw err;
    res.json({data: rows});
  });
})

app.post('/articles', (req, res) => {
  const article = {
    title: req.body.title,
    body: req.body.body,
    created_by: parseInt(req.body.created_by, 10),
    updated_by: parseInt(req.body.created_by, 10),
  }

  db.query('INSERT INTO `articles` SET ?', article, function (err, result) {
    if (err) {
      res.status(400).json({error: err})
      return
    }

    article.id = result.insertId
    const tags = []

    for (let tag of req.body.tags) {
      tags.push([article.id, tag])
    }

    db.query('INSERT INTO `tags`(article_id, value) VALUES ?', [tags], (err, result) => {
      if (err) {
        res.status(400).json({data: {error: err}})
        return
      }

      res.status(201).json({data: {article_id: article.id}});
    })
  })
})


/**
 * ============================================================================
 */


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({'error': true})
  console.log(err);
});

module.exports = app;
