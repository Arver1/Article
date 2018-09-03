const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const multiparty = require('multiparty');
const morgan = require('morgan');
const app = express();

const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(morgan('dev'));

app.post('/', (req, res) => {
  const form = new multiparty.Form();
  let body = '';
  form.parse(req, function(err, {author, message, id}) {
    const data = fs.readFileSync(path.join(__dirname,'../fixtures.js')).toString().
    replace('export const articles = ', '');
    const dat = data.slice(0, -1);
    res.send(`hello ${author}`);
    /*
    const body = JSON.parse(dat);
    body[0].comments.push({
      id: 'test',
      title: author[0],
      text: message[0]
    });
    const str = 'export const articles = '+ JSON.stringify(body) + ';';
    console.log(str);
    fs.writeFileSync(path.join(__dirname,'../fixtures.js'), str);
    */
  });
});

app.listen(3001, () => console.log('server started'));

