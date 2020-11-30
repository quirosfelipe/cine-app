import styled from "styled-components";

export const StyledLikeDislike = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  .likes,
  .dislikes {
    margin: 2.5em 0 0 60px;
    width: 5em;

    p {
      margin: 0;
    }
  }

  .like-btn,
  .dislike-btn {
    background-color: none;
    background: none;
    color: white;
    border: none;
  }

  .like-btn:focus,
  .dislike-btn:focus {
    outline: 0;
  }

  .like-btn:hover,
  .dislike-btn:hover {
    color: rgb(91, 37, 91);
  }

  h3 {
    font-size: 16px;
    line-height: 0;
    margin-top: 30px;
  }

  @media screen and (max-width: 768px) {
    min-height: 100px;
    height: auto;
    margin-top: 90px;
    margin-left: -280px;
  }

  @keyframes animateMovieinfos {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
