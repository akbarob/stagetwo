import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Hero({ setSearchText }) {
  return (
    <header className={`relative w-full  h-[600px] bg-amber-400 text-white`}>
      <Image
        className="absolute inset-x-0 inset-y-0 w-full z-0 object-fill"
        src="/images/Poster.png"
        fill
        alt="poster"
        priority
      />
      <div className="absolute justify-between z-50 w-full h-full px-16 py-2">
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-4 items-center ">
            <Image
              className="h-[50px] w-[50px]"
              src="/images/Logo.svg"
              width={100}
              height={100}
              alt="logo"
            />
            <h1 className="text-white font-semibold text-[24px]">MovieBox</h1>
          </div>

          <div className="px-4 flex justify-center items-center gap-5 w-[525px] h-[36px] rounded-[6px] border-2 border-white">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="search"
              className="flex-1 bg-transparent outline-none placeholder:text-white"
              placeholder="What do you want to watch"
            />
            <Image
              className="h-[16px] w-[16px]"
              src="/images/Search.svg"
              width={100}
              height={100}
              alt=""
            />
          </div>
          <div className="flex gap-4">
            <button>Sign in</button>
            <Image
              className="w-[36px] h-[36px] "
              src="/images/Menu.svg"
              width={100}
              height={100}
              alt=""
            />
          </div>
        </div>
        <div className="h-[404px] w-[285px] my-[76px] flex flex-col gap-[16px]">
          <h1 className="font-bold  text-[42px]">
            John Wick 3 : <br /> Parabellum
          </h1>

          <div className="flex gap-16 ">
            <span className="flex gap-3">
              <Image
                className="w-[35px] h-[17px] "
                src="/images/imdg.png"
                width={100}
                height={100}
                alt=""
              />
              <p className="text-[12px]">86.0/10.0</p>
            </span>
            <span className="flex gap-3">
              <Image
                className="w-[16px] h-[17px] "
                src="/images/tomatoe.png"
                width={100}
                height={100}
                alt=""
              />{" "}
              <p className="text-[12px]">97%</p>
            </span>
          </div>
          <p className="text-[14px]">
            John Wick is on the run after killing a member of the international
            assassins &apos; guild, and with a $14 million price tag on his
            head, he is the target of hit men and women everywhere.
          </p>
          <button className="px-2 py-2 flex gap-2 bg-rose-700 rounded-md justify-evenly  items-center w-[169px] h-[36]">
            <Image
              className="w-[20px] h-[20px] "
              src="/images/Play.svg"
              width={100}
              height={100}
              alt=""
            />
            <p className="uppercase text-[14px]">Watch trailer</p>
          </button>
        </div>
      </div>
    </header>
  );
}
