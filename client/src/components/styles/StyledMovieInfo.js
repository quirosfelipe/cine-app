import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const StyledMovieInfo = styled.div`
  background: ${(props) =>
    props.backdrop
      ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')`
      : "#000"};
  background-size: cover !important;
  background-position: center !important;
  width: auto;
  padding: 34px 20px;
  box-sizing: border-box;
  animation: animateMovieinfo 2s;

  .movieinfo-content {
    max-width: 1280px;
    min-height: 450px;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.4);
    border-radius: 20px;
    position: relative;
  }

  .movieinfo-thumb {
    width: 300px;
    float: left;

    @media screen and (max-width: 768px) {
      width: 100% !important;
    }
  }

  .movieinfo-text {

    width:auto;
    font-family: Arial, Helvetica, sans-serif;
    padding: 40px;
    color: #fff;
    overflow: hidden;

    h1 {
      font-family: "Abel", sans-serif;
      font-size: 48px;
      margin: 0;

      @media screen and (max-width: 1000px) {
        font-size: 32px !important;
      }
    }

    h3 {
      font-size: 16px;
      line-height: 0;
      margin-top: 30px;
    }

    p {
      font-family: "Abel", sans-serif;
      font-size: 18px;
      line-height: 26px;
    }
  }

  .rating-director {
    display: flex;
    align-items:start;
    
  }
  .r {
      @media screen and (max-width: 768px) {
        
    width:20px;
    margin-right:30px;

    }
      h3 {
      font-size: 16px;
      line-height: 1;
      margin-top: 25px;
    }
  }
  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 25px;
    margin: 0 0 0 6px;
    
  }
  .year {
    margin: 29px 0 0 0;
  }

  .director, .release-year {
    margin: 0 0 0 60px;

    p {
      margin: 25px 0 0 0;
    }
      @media screen and (max-width: 768px) {
  margin-top:20px;
   margin: 20px 0 0 25px;
    }
  }

  @media screen and (max-width: 768px) {
    min-height: 600px;
    height: auto;
    }
  }

  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
