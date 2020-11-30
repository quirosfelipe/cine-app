import fetch from "isomorphic-fetch";
import { BASE_URL } from "../../config";

export const getMovieLikes = async (movieName) => {
  try {
    const response = await fetch(`${BASE_URL}/getLikes`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieName),
    });
    console.log("this is the response--->", response);
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const countLikes = async (movieName, likes, dislikes) => {
  try {
    const response = await fetch(`${BASE_URL}/countLikes`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieName, likes, dislikes),
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const countDislikes = async (movieName, likes, dislikes) => {
  try {
    const response = await fetch(`${BASE_URL}/countDislikes`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieName, likes, dislikes),
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};
