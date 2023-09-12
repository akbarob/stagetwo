import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function MovieCard({ item }) {
  console.log(item);
  const router = useRouter();
  const [like, setlike] = useState("false");

  return (
    <div
      onClick={() => router.push(`/movie/${item.id}`)}
      // href={`/movie/${item.id}`}
      data-testid="movie-card"
      className="relative flex flex-col gap-4 h-[490px] w-[250px] mb-[103px]/2 cursor-pointer"
    >
      <div className=" absolute z-40 top-0 w-full p-3 flex justify-between items-center">
        <span>
          <button className="rounded-full bg-[#F3F4F6] w-[74px] h-[22px]">
            Movies
          </button>
        </span>
        <span>
          <Image
            onClick={(e) => {
              e.stopPropagation();
              setlike(!like);
            }}
            className="w-[20px] h-[20px]"
            src={`/images/${like ? "like" : "unlike"}.svg`}
            width={100}
            height={100}
            alt={`fav icon`}
          />
        </span>
      </div>

      <div className="relative w-[250px] h-[370px] object-contain">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          fill
          alt={`poster image of ${item.title}`}
          data-testid="movie-poster"
        />
      </div>

      <section>
        <p data-testid="movie-release-date" className="text-[12px] font-bold">
          {item.release_date}
        </p>
        <p data-testid="movie-title" className="text-[18px] font-bold">
          {item.title}
        </p>
        <div className="flex gap-3 items-center">
          <Image
            className="w-[35px] h-[17px]"
            src="/images/imdg.png"
            width={100}
            height={100}
            alt=""
          />
          <p>{item.vote_average}</p>
        </div>
      </section>
    </div>
  );
}
