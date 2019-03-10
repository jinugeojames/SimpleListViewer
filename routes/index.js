const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const csv = require('fast-csv');
const model = require('../models/data.js'); // get our mongoose model

const router = express.Router();

mongoose.connect('mongodb://localhost:27017'); // connect to database

/* GET home page. */
const RatingData = [{
  rank: 1,
  grade: 'A++',
  views: 200,
  name: 'HeyYOu',
  video: 500,
  uploads: 10000,
  subscribers: 2000,

},
{
  rank: 365,
  grade: 'A++',
  views: 200,
  name: 'sachu',
  video: 500,
  uploads: 10000,
  subscribers: 2000,

},
{
  rank: 3,
  grade: 'A++',
  views: 200,
  name: 'HeyYOu',
  video: 500,
  uploads: 10000,
  subscribers: 2000,

}];
router.get('/', (req, res, next) => {
  let message = 'The List';
  model.find({
  }, (err, user) => {
    if (err) {
      res.render('error', { message: 'Something very happened.Bad Bug. Check Mongo connection', error: { status: 404, stack: 'Mongo error' } });
    } else if (user == '') {
      message = 'Csv data is being imported for the first time';
      const csvData = [];
      csv
        .fromPath('data/data.csv')
        .on('data', (data) => {
          const usefull = {
            _id: new mongoose.Types.ObjectId(),
            rank: data[0],
            grade: data[1],
            name: data[2],
            uploads: data[3],
            subscribers: data[4],
            views: data[5],
          };

          csvData.push(usefull);
        })
        .on('end', () => {
          model.create(csvData, (err, documents) => {
            if (err) throw err;
          });
        });
    }
    res.render('index', { title: 'Express', data: user, message });
  });
});

module.exports = router;
