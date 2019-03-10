const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const csv = require('fast-csv');
const model = require('../models/data.js'); // get our mongoose model

const router = express.Router();

mongoose.connect('mongodb://localhost:27017'); // connect to database

/* GET home page. */
const csvData = [];
router.get('/', async (req, res, next) => {
  const message = 'The Highest Rated Movie List';
  await model.find({
  }, async (err, user) => {
    if (err) {
      res.render('error', { message: 'Something very happened.Bad Bug. Check Mongo connection', error: { status: 404, stack: 'Mongo error' } });
    } else if (user == '') {
      await csv
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
        .on('end', async () => {
          await model.create(csvData, (err, documents) => {
            if (err) throw err;
          });
        });
      user = csvData;
    }
    await res.render('index', { title: 'MovieBuff', data: user, message });
  });
});

module.exports = router;
