const express = require('express');

const router = express.Router();

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
  res.render('index', { title: 'Express',data: RatingData });
});

module.exports = router;
