import React, { useEffect, useState } from "react";
import FontAwesome from "react-fontawesome";
import { StyledLikeDislike } from "../styles/StyledLikeDislike";
import { getMovieLikes, countLikes, countDislikes } from "../hooks/likeAction";

const LikeDislike = (movieName) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    getMovieLikes(movieName).then((data) => {
      setLikes(data.likes);
      setDislikes(data.dislikes);
    });
  }, [movieName, likes, dislikes]);

  const onLike = () => {
    countLikes(movieName, likes, dislikes).then((data) => {
      setLikes(data.likes);
      return data;
    });
  };

  const onDislike = () => {
    countDislikes(movieName, likes, dislikes).then((data) => {
      setDislikes(data.dislikes);
      return data;
    });
  };

  return (
    <StyledLikeDislike>
      <div className="likes">
        <button className="like-btn" onClick={onLike}>
          <FontAwesome className="fa-thumbs-up" name="thumbs-up" size="3x" />
        </button>
        <span className="like">{likes}</span>
      </div>
      <div className="dislikes">
        <button className="dislike-btn" onClick={onDislike}>
          <FontAwesome
            className="fa-thumbs-down"
            name="thumbs-down"
            size="3x"
          />
        </button>
        <span className="dislike">{dislikes}</span>
      </div>
    </StyledLikeDislike>
  );
};

export default LikeDislike;
