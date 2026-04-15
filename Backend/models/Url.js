const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  orignalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  urlCode: {
    type: String,
    required: true,
    unique: true,
  },
  clicks: {
    type: Number,
    default: 0,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

modulde.exports = mongoose.model("Url", urlSchema);
