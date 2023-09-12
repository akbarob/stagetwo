import Image from "next/image";
import Link from "next/link";
import React from "react";

const navs = [
  { icon: "/images/Home.svg", link: "/", name: "Home" },
  { icon: "/images/Movie Projector.svg", link: "#", name: "Movies" },
  { icon: "/images/TV Show.svg", link: "#", name: "Tv Series" },
  { icon: "/images/Calendar.svg", link: "#", name: "Upcoming" },
];
export default function Sidebar() {
  return (
    <div className="hidden md:flex w-[226px] bg-white h-screen border-[1px] rounded-tr-[45px] rounded-br-[45px] border-[#000000]/30  border-tr-[45px]  flex-col gap-4 ">
      <Link href="/" className="flex gap-4 items-center p-8 cursor-pointer">
        <Image
          className="h-[50px] w-[50px]"
          src="/images/Logo.svg"
          width={100}
          height={100}
          alt="logo"
          priority
        />
        <h1 className="text-rose-900 font-semibold text-[24px]">MovieBox</h1>
      </Link>

      <ul className="">
        {navs.map((item) => (
          <Link
            href={item.link}
            key={item.name}
            className={` flex gap-4 w-full h-[66px] items-center justify-start pl-6 ${
              item.name === "Movies" &&
              "bg-[#BE123C]/10 border-r-[#BE123C] border-r-[5px] "
            }`}
          >
            <Image
              className="h-[25px] w-[25px] "
              src={item.icon}
              width={100}
              height={100}
              alt="logo"
            />
            <p className="font-semibold text-[20px]">{item.name}</p>
          </Link>
        ))}
      </ul>

      <div className="flex flex-col p-5 w-[170px] h-[210px] rounded-[20px] border-[#BE123C]/70 bg-[#BE123C]/10 border-2 mx-auto gap-[8px] mt-4">
        <p className="text-[15px] font-semibold">
          Play movie quizes and earn free ticktes
        </p>
        <p className="text-[12px] font-medium">50k people are playing</p>
        <button className=" rounded-[30px] bg-[#BE123C]/20 text-[#BE123C] text-[12px] px-4 py-2 mt-[8px]">
          Start playing
        </button>
      </div>
      <button className="flex gap-4 items-center text-[12px] mx-auto">
        <Image
          className="h-[25px] w-[25px] "
          src="/images/Logout.svg"
          width={100}
          height={100}
          alt="logo"
        />
        <p className="text-[20px] font-semibold">Log out</p>
      </button>
    </div>
  );
}
