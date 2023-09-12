import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function MovieCard({ item }) {
  const router = useRouter();
  const [like, setlike] = useState("false");

  return (
    <div
      onClick={() => router.push(`/movie/${item.id}`)}
      // href={`/movie/${item.id}`}
      data-testid="movie-card className"
      className="relative h-[490px] w-[250px] mb-[103px] cursor-pointer"
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
            alt={`poster image of ${item.title}`}
          />
        </span>
      </div>
      <Image
        className="w-full h-[370px]"
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        width={100}
        height={100}
        alt={`poster image of ${item.title}`}
        data-testid="movie-poster"
      />
      <section>
        <p data-testid="movie-release-date">{item.release_date}</p>
        <p data-testid="movie-title">{item.title}</p>
        <div>
          <Image
            className="w-[35px] h-[17px]"
            src="/images/imdg.png"
            width={100}
            height={100}
            alt=""
          />
          <p>rating</p>
        </div>
        <p>action,adventure</p>
      </section>
    </div>
  );
}
