import React from "react";
import MovieCard from "./MovieCard";
import Link from "next/link";
import Image from "next/image";

export default function MainContent({ movies }) {
  return (
    <div className="relative w-full h-full my-10 px-20">
      <div className="flex justify-between items-center my-11">
        <h2 className="font-bold text-4xl">Featured Movie</h2>
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
