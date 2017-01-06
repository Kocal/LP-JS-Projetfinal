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

app.get('/tags', (req, res) => {
  db.query('SELECT value FROM tags GROUP BY value', function (err, rows, fields) {
    if (err) throw err;
    res.json({data: rows});
  });
})

app.get('/tags/:tag', (req, res) => {
  db.query(
    'SELECT GROUP_CONCAT(A.id SEPARATOR "||") AS articles_id' +
    ' FROM tags T' +
    ' INNER JOIN articles A' +
    ' ON T.article_id = A.id' +
    ' WHERE T.value = ?', [req.params.tag], function (err, rows, fields) {
    if (err) throw err;
    res.json({data: rows[0].articles_id});
  });
})

app.get('/authors', (req, res) => {
  db.query('SELECT * FROM authors', function (err, rows, fields) {
    if (err) throw err;
    res.json({data: rows});
  });
})

app.get('/authors/:id', (req, res) => {
  db.query(
    'SELECT Au.id, Au.firstname, Au.lastname,' +
    ' GROUP_CONCAT(Ar.id SEPARATOR "||") AS articles_id ' +
    ' FROM authors Au' +
    ' INNER JOIN articles Ar' +
    ' ON Au.id = Ar.created_by ' +
    ' WHERE Au.id = ?' +
    ' GROUP BY Au.id', [req.params.id], function (err, rows, fields) {
      if (err) throw err;
      res.json({data: rows[0]});
    });
})

app.get('/articles', (req, res) => {
  db.query(
    'SELECT A.id, A.title, A.body, A.created_at, A.created_by, GROUP_CONCAT(T.value SEPARATOR "||") as tags' +
    ' FROM articles A' +
    ' INNER JOIN tags T' +
    ' ON A.id = T.article_id' +
    ' GROUP BY A.id' +
    ' ORDER BY created_at DESC', function (err, articles, fields) {
      if (err) throw err;
      res.json({data: articles});
    });
})

app.get('/articles/:id', (req, res) => {
  db.query(
    'SELECT A.id, A.title, A.body, A.created_at, GROUP_CONCAT(T.value SEPARATOR "||") as tags,' +
    ' Au.id AS author_id, Au.firstname AS author_firstname, Au.lastname AS author_lastname' +
    ' FROM articles A' +
    ' INNER JOIN tags T' +
    ' ON A.id = T.article_id' +
    ' INNER JOIN authors Au' +
    ' ON A.created_by = Au.id' +
    ' WHERE A.id = ?' +
    ' GROUP BY A.id' +
    ' ORDER BY created_at DESC', [req.params.id], function (err, articles, fields) {
      if (err) throw err;
      res.json({data: articles[0]});
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

    for (let tag of req.body.tags || []) {
      tags.push([article.id, tag])
    }

    db.query('INSERT INTO `tags`(article_id, value) VALUES ?', [tags], (err, result) => {
      if (err) {
        res.status(400).json({data: {error: err}})
        return
      }

      res.status(201).json({data: article.id});
    })
  })
})

app.delete('/articles/:id', (req, res) => {
  const article_id = req.params.id

  db.query('DELETE FROM `tags` WHERE article_id = ?', [article_id], (err, result) => {
    if (err) {
      console.error(err)
      res.status(400).json({data: {error: err}})
      return
    }

    db.query('DELETE FROM `articles` WHERE id = ?', [article_id], (err, result) => {
      if (err) {
        console.error(err)
        res.status(400).json({data: {error: err}})
        return
      }

      res.status(201).json({data: [true]})
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
