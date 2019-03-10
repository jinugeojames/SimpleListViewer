const mongoose = require('mongoose');

const { Schema } = mongoose;


// set up a mongoose model and pass it using module.exports
const data = mongoose.model('data', new Schema({
  rank: {
    type: String, trim: true,
  },
  grade: { type: String, trim: true },
  name: { type: String, trim: true },
  uploads: {
    type: String, trim: true,
  },
  subscribers: {
    type: String, trim: true,
  },
  views: {
    type: String, trim: true,
  },

}));


module.exports = data;
