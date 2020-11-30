const Movie = require("../models/movie");

exports.movieLikes = (req, res) => {
  const { movieName } = req.body;
  console.log(movieName);
  //   console.log("request . body", req.body);
  Movie.findOne({ movieName: req.body.movieName }).exec((err, movie) => {
    const { movieName } = req.body; // like, dislikes
    console.log("in the db1!");
    console.log("route 1", movie);

    if (movie) {
      return res.json(movie); // movie: { movieName, likes, dislikes }
    }
    let newMovie = new Movie({ movieName });
    newMovie.save((err, movie) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      console.log(movie);
      res.json(movie);
    });
  });
};

exports.countLikes = (req, res) => {
  Movie.findOne({ movieName: req.body.movieName }).exec((err, movie) => {
    const { movieName } = req.body; // like, dislikes
    console.log("in the db2!");
    console.log("route 2", movie);
    // const { movieName, likes, dislikes } = req.body;
    console.log("likes -->", movie.likes);
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    movie.likes = movie.likes + 1;
    movie.save((err, { likes }) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      console.log("trying to sum", likes);
      res.json(likes);
    });
  });
};

exports.countDislikes = (req, res) => {
  Movie.findOne({ movieName: req.body.movieName }).exec((err, movie) => {
    const { movieName } = req.body; // like, dislikes

    // const { movieName, likes, dislikes } = req.body;
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    movie.dislikes = movie.dislikes + 1;
    movie.save((err, { dislikes }) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      res.json(dislikes);
    });
  });
};
