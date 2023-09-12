"use client";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Moviepage({ params }) {
  const [movie, setMovie] = useState({});
  const movie_id = params.id;
  async function getMovieDetails() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjA2YjRiMTgyMmU4MGExMzQ1NzA2ODEwMjAwOWFhMyIsInN1YiI6IjY0ZmVmM2ExZGI0ZWQ2MTAzM2ExNmY3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xTgPSf5G-gURhmjZ6uFQw4XkDGo3z1Jbot_DffMhAgc",
      },
    };

    await fetch(`https://api.themoviedb.org/3/movie/${movie_id}`, options)
      .then((response) => response.json())
      .then((response) => setMovie(response))
      .catch((err) => console.error(err));
    console.log("details ran");
    console.log(movie_id);
    console.log(movie);
  }

  useEffect(() => {
    getMovieDetails();
    console.log(movie);
  }, []);
  return (
    <div className="flex gap-4 overflow-y-auto relative">
      <Sidebar className="fixed" />
      <section className="h-screen overflow-y-auto flex-1 flex flex-col p-4 gap-10">
        <div className="relative">
          <div className="absolute  inset-x-0 inset-y-0 flex justify-center items-center ">
            <Image
              className="w-[168px] h-[157px] cursor-pointer"
              src={`/images/playTrailer.svg`}
              width={100}
              height={100}
              alt={`poster image of ${movie.title}`}
              data-testid="movie-poster"
            />
          </div>

          <Image
            className="w-[1198px] h-[449px] rounded-3xl"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            width={100}
            height={100}
            alt={`poster image of ${movie.title}`}
            data-testid="movie-poster"
          />
        </div>
        <div>
          <div className="flex justify-between mb-10 w-full">
            <div className="flex gap-3 justify-between items-center">
              <h1 data-testid="movie-title">{movie.title}</h1>
              <span>•</span>{" "}
              <h1 data-testid="movie-release-date">{movie.release_date}</h1>{" "}
              <span>•</span>
              <h1>{movie.adult ? "PG - 13" : "PG - 6"}</h1>
              <h1 data-testid="movie-runtime">{movie.runtime} mins</h1>
              {movie?.genres?.map((item) => (
                <p
                  key={item.id}
                  className=" flex justify-center items-center px-2 py-1 text-[#B91C1C] rounded-[15px] border-[#F8E7EB] border-[1px]"
                >
                  {item.name}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center gap-2">
                <Image
                  className="w-[30px] h-[30px]  "
                  src={`/images/Star.svg`}
                  width={100}
                  height={100}
                  alt={`poster image of ${movie.title}`}
                  data-testid="movie-poster"
                />
              </div>
              <p>{movie.vote_average}</p> <p> | </p> <p>{movie.vote_count}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="gap-10 flex flex-col">
              <p data-testid="movie-overview">{movie.overview}</p>
              <h1>Director: </h1>
              <h1>Writers:</h1>
              <h1>Stars:</h1>
            </div>
            <div className="flex flex-col gap-8">
              <button className="rounded-[10px] w-[360px] h-[55px] bg-[#BE123C]">
                See Sowtimes
              </button>
              <button className="rounded-[10px] w-[360px] h-[55px] bg-[#BE123C]/10 border-[#BE123C] text-[#333333]">
                More watch options
              </button>
              <div className="w-[350px] h-[299px]">
                <Image
                  className="w-full"
                  src="/images/Group 52.jpg"
                  alt="poster"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
