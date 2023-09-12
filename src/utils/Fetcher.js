import useSWR from "swr";
import React from "react";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjA2YjRiMTgyMmU4MGExMzQ1NzA2ODEwMjAwOWFhMyIsInN1YiI6IjY0ZmVmM2ExZGI0ZWQ2MTAzM2ExNmY3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTgPSf5G-gURhmjZ6uFQw4XkDGo3z1Jbot_DffMhAgc",
  },
};

export function GetMoviesBySearch(searchText) {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=7f06b4b1822e80a13457068102009aa3`,
    fetcher
    // options
  );
  return {
    data,
    isLoading,
    error,
  };
}

export function GetMovies() {
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=7f06b4b1822e80a13457068102009aa3`,
    fetcher
  );
  return {
    data,
    isLoading,
    error,
  };
}

// async function getMovies() {
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjA2YjRiMTgyMmU4MGExMzQ1NzA2ODEwMjAwOWFhMyIsInN1YiI6IjY0ZmVmM2ExZGI0ZWQ2MTAzM2ExNmY3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTgPSf5G-gURhmjZ6uFQw4XkDGo3z1Jbot_DffMhAgc",
//     },
//   };

//   await fetch(
//     "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
//     options
//   )
//     .then((response) => response.json())
//     .then((response) => setMovies(response?.results))
//     .catch((err) => console.error(err));
//   console.log("ran");
// }

// const getMoviesBySearch = async () => {
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjA2YjRiMTgyMmU4MGExMzQ1NzA2ODEwMjAwOWFhMyIsInN1YiI6IjY0ZmVmM2ExZGI0ZWQ2MTAzM2ExNmY3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTgPSf5G-gURhmjZ6uFQw4XkDGo3z1Jbot_DffMhAgc",
//     },
//   };

//   await fetch(
//     `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`,
//     options
//   )
//     .then((response) => response.json())
//     .then((response) => setSearchedMovie(response.results))
//     .catch((err) => console.error(err));
// };
// useEffect(() => {
//   getMoviesBySearch();
//   console.log("from searc", searchedmovie);
// }, [searchText]);
