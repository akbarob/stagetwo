import Image from "next/image";
import Link from "next/link";
import React from "react";
const icons = [
  "/images/facebook.svg",
  "/images/insta.svg",
  "/images/twitter.svg",
  "/images/youtube.svg",
];
export default function Footer() {
  return (
    <div className="flex justify-center items-center">
      <footer className="w-[492px] h-[145px] grid gap-[36px] ">
        <div className="flex gap-[48px] justify-center items-center">
          {icons.map((item) => (
            <Link key={item} href="/#">
              <Image
                className="w-[24px] h-[27.4px]"
                src={item}
                alt="item"
                width={100}
                height={100}
              />
            </Link>
          ))}
        </div>
        <div className="flex gap-[48px] justify-between">
          <p>Condition of Use</p>
          <p>Condition of Use</p>

          <p>Condition of Use</p>
        </div>
        <div>
          <p className="text-center">© 2021 MovieBox by Akbar badmus</p>
        </div>
      </footer>
    </div>
  );
}
