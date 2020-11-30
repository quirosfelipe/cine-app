const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    movieName: {
      type: String,
      // required: true,
      // max: 32,
      // unique: true,
      // index: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Movie", movieSchema);
