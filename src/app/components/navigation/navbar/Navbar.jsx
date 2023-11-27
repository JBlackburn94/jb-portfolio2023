"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const links = [
    {
      id: "1",
      link: "/",
      title: "Home",
    },
    {
      id: "2",
      link: "/about",
      title: "About",
    },
    {
      id: "3",
      link: "/contact",
      title: "Contact",
    },
  ];

  const [nav, setNav] = useState(false);

  return (
    <nav className="h-16 text-white flex justify-between items-center m-4 rounded-lg drop-shadow-lg">
      <h1 className="ml-4 font-thin text-2xl">Jason Blackburn</h1>
      <ul className="hidden md:flex font-thin">
        {links.map(({ link, title, id }) => (
          <li key={id} className="mx-4 text-xl">
            <Link href={link}>{title}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="z-40 pr-4 cursor-pointer md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute top-20 left-0 z-30 flex flex-col items-center justify-center w-full h-50 text-white bg-[#256EFF] rounded-lg animate-flip-down">
          {links.map(({ id, title, link, att }) => (
            <li
              key={id}
              className="my-4 text-xl font-thin capitalize hover:bg-[#3DDC97]"
            >
              <Link onClick={() => setNav(!nav)} target={att} href={link}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
