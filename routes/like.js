const express = require("express");
const router = express.Router();
const {
  movieLikes,
  countLikes,
  countDislikes,
} = require("../controllers/like");

router.post("/getLikes", movieLikes);
router.post("/countLikes", countLikes);
router.post("/countDislikes", countDislikes);

module.exports = router;
