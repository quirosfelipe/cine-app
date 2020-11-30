import { useState, useEffect } from "react";
import { POPULAR_BASE_URL } from "../../config";

// custom hook
export const useHomeFetch = (searchTerm) => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setLoading(true);
    const loadMore = endpoint.search("page");
    try {
      const data = await (await fetch(endpoint)).json();
      // console.log("data --->", data);
      setState((state) => ({
        ...state,
        movies:
          loadMore !== -1
            ? [...state.movies, ...data.results]
            : [...data.results],
        heroImage:
          state.heroImage ||
          data.results[Math.floor(Math.random() * Math.floor(15))],
        currentPage: data.page,
        totalPages: data.total_pages,
      }));
    } catch (error) {
      setError(true);
      console.log(true);
    }
    setLoading(false);
  };
  //trigger the function fetchMovies with an empty [] dependency array
  useEffect(() => {
    if (sessionStorage.homeState) {
      // console.log("grabbing from SessionStorage...");
      setState(JSON.parse(sessionStorage.homeState));
      setLoading(false);
    } else {
      // console.log("grabbing from API...");
      fetchMovies(POPULAR_BASE_URL);
    }
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      // console.log("writting session storage");
      sessionStorage.setItem("homeState", JSON.stringify(state));
    }
  }, [searchTerm, state]);

  return [{ state, loading, error }, fetchMovies];
};
