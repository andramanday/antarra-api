const express = require('express')
const app = express()
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const PORT = process.env.PORT

const model = require('./models/');

// app.use(cors());
app.use(logger('dev'));
// app.use(`/${process.env.IMG_ROOT}/`, express.static('app/public/uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

import route from './config/routes';

route(app);

app.get('/', (req, res) => res.status(200).send({
    message: 'welcome to default API route',
    name: 'Andra Manday'
}));

app.get('/useraccess', async function (req, res, next) {
    try {
      const app_access = await model.app_access.findAll({});
      if (app_access.length !== 0) {
        res.json({
          'status': 'OK',
          'messages': '',
          'data': app_access
        })
      } else {
        res.json({
          'status': 'ERROR',
          'messages': 'EMPTY',
          'data': {}
        })
      }
    } catch (err) {
      res.json({
        'status': 'ERROR',
        'messages': err.messages,
        'data': {}
      })
    }
});

app.post('/', async function (req, res, next) {
    try {
      const {
        user_app,
        key_app
      } = req.body;
      const app_access = await model.app_access.create({
        user_app,
        key_app
      });
    if (app_access) {
      res.status(201).json({
        'status': 'OK',
        'messages': 'User berhasil ditambahkan',
        'data': app_access,
      })
    }
   } catch (err) {
     res.status(400).json({
       'status': 'ERROR',
       'messages': err.message,
       'data': {},
     })
   }
  });
  
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});