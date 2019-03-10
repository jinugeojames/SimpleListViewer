const mongoose = require('mongoose');

const { Schema } = mongoose;


// set up a mongoose model and pass it using module.exports
const data = mongoose.model('data', new Schema({
  rank: {
    type: Number, required: true, trim: true,
  },
  grade: { type: String, required: true },
  views: {
    type: Number, required: true, trim: true,
  },
  name: { type: String, required: true },
  video: {
    type: Number, required: true, trim: true,
  },
  uploads: {
    type: Number, required: true, trim: true,
  },
  subscribers: {
    type: Number, required: true, trim: true,
  },

}));


module.exports = data;
