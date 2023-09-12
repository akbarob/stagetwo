import Link from "next/link";
import React from "react";
import MovieCard from "./MovieCard";
import Image from "next/image";
import Loading from "./Loading";

export default function SearchMain({ movies, isLoading }) {
  if (isLoading === true) return <Loading />;
  else
    return (
      <div className="absolute z-50 top-10 w-full h-screen my-10 px-20 bg-white">
        <div className="flex justify-between items-center my-11">
          <h2 className="font-bold text-4xl">Result from search</h2>
          <Link href="#" className="flex gap-2 items-center ">
            <p className="text-rose-700">See more</p>
            <Image
              className="w-[20px] h-[20px]"
              src="/images/Chevron right.svg"
              alt="Chevron right"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="flex justify-center items-center mx-auto">
          <div className=" grid grid-cols-4 gap-20 place-content-center">
            {movies?.slice(0, 10).map((item) => (
              <MovieCard key={item?.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    );
}
