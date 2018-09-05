const path = require('path');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const multiparty = require('multiparty');
const morgan = require('morgan');
const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(morgan('dev'));

app.post('/', (req, res) => {
  const form = new multiparty.Form();
  form.parse(req, function(err, {author, message, id}) {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname,'../fixture.json')).toString());
    data.forEach((article, index) => {
      console.log(article.id == id)
      if(article.id == id) {
        data[index].comments.push({
          id: Math.random().toString(),
          user: author[0],
          text: message[0]
        });
      }
    });
    fs.writeFileSync(path.join(__dirname,'../fixture.json'), JSON.stringify(data));
    res.json({
      author,
      message
    });
  });
});

app.listen(3001, () => console.log('server started'));

