"use client";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Moviepage({ params }) {
  const [movie, setMovie] = useState({});
  const movie_id = params.id;

  const avatar = [
    "/images/avatar1.png",
    "/images/avatar2.png",
    "/images/avatar3.png",
    "/images/avatar4.png",
  ];
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
  }

  useEffect(() => {
    getMovieDetails();
    console.log(movie);
  }, []);
  return (
    <div className="flex gap-4 overflow-y-auto relative">
      <Sidebar className="hidden lg:fixed" />
      <section className="h-screen overflow-y-auto lg:flex-1 flex flex-col p-4 gap-10">
        <div className="relative">
          <div className="relative  w-[1198px] h-[449px] rounded-3xl">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              fill
              className="rounded-3xl object-cover"
              alt={`poster image of ${movie.title}`}
              data-testid="movie-poster"
            />
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
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-10 w-full font-semibold">
            <div className="flex gap-3 justify-between items-center">
              <h1 data-testid="movie-title">{movie.title}</h1>
              <span className="hidden lg:visible">•</span>{" "}
              <h1 data-testid="movie-release-date">{movie.release_date}</h1>{" "}
              <span className="hidden lg:visible">•</span>
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
              <div className="flex justify-between">
                <p data-testid="movie-overview" className="">
                  {movie.overview}
                </p>
                <div className="flex flex-col gap-3">
                  <button className="rounded-[10px] w-[360px] h-[55px] bg-[#BE123C]">
                    See Showtimes
                  </button>
                  <button className="rounded-[10px] w-[360px] h-[55px] bg-[#BE123C]/10 border-[#BE123C] text-[#333333]">
                    More watch options
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col gap-6 w-[785px]">
                  <h1>
                    Director:
                    <span className="pl-2 text-[20px] text-[#BE123C]">
                      Joseph Kosinski
                    </span>
                  </h1>
                  <h1>
                    Writers:
                    <span className="pl-2 text-[20px] text-[#BE123C]">
                      Jim Cash, Jack Epps Jr, Peter Craig
                    </span>
                  </h1>
                  <h1>
                    Stars:
                    <span className="pl-2 text-[20px] text-[#BE123C]">
                      Tom Cruise, Jennifer Connelly, Miles Teller
                    </span>
                  </h1>
                  <div className="mr-4 h-[55px] rounded-[10px] border flex ">
                    <button className="bg-[#BE123C] w-[253px] rounded-[10px] py-2 px-3 ">
                      Top rated movie #65
                    </button>
                    <div className="flex flex-1 px-6 justify-between items-center">
                      <p>Award 9 niminations</p>
                      <Image
                        src="/images/Expand Arrow.svg"
                        className="w-[30px] h-[30px]"
                        width={100}
                        height={100}
                        alt="arrow"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative w-[350px] h-[299px]">
                  <Image
                    className="w-full"
                    src="/images/Group 52.jpg"
                    alt="poster"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <section>
          {" "}
          <h1>Top Cast</h1>
          <div className="relative w-[150px] h-[150px] rounded-full">
            {avatar.map((item) => (
              <div>
                <Image fill src={item} alt={item} className="" />
              </div>
            ))}
          </div>
        </section> */}
      </section>
    </div>
  );
}
