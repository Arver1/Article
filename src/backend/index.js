const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const multiparty = require('multiparty');
const morgan = require('morgan');
const app = express();
const { normalizedArticles } = require('./public/fixtures');


const articlesText = normalizedArticles.reduce((acc, {id, text}) => {
  acc[id] = text;
  return acc;
}, {});

const articlesComment = normalizedArticles.reduce((acc, {id, comments}) => {
  acc[id] = comments;
  return acc;
}, {});

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const options = {
  extensions: ['json'],
};

app.use(cors(corsOptions));
app.use(morgan('dev'));

app.get('/api/article/:id', (req, res) => {
  if(articlesText[req.params.id]) {
    res.json(articlesText[req.params.id])
  }
  res.sendStatus(404);
});

app.get('/api/comment', (req, res, next) => {
  if(articlesComment[req.query.article]){
    res.json(articlesComment[req.query.article])
  }
  next();
});
app.use('/api', express.static(path.join(__dirname, 'public'), options));

app.get('/', (req, res) => {
  res.send('<h1>Server hello</h1>');
});

app.listen(3001, () => console.log('server started'));

