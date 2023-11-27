"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/J.CREATES.webp";

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
    <nav className="h-16 flex justify-between items-center m-4 rounded-lg drop-shadow-lg bg-black bg-opacity-50">
      <Image src={Logo} alt="JB Dev Logo" className="h-50 w-auto" priority />
      <ul className="hidden md:flex">
        {links.map(({ link, title, id }) => (
          <li key={id} className="mx-4 text-xl hover:underline">
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
        <ul className="absolute top-0 left-0 z-30 flex flex-col items-center justify-start w-full h-screen bg-black animate-flip-down">
          <Image src={Logo} alt="JB Dev Logo" className="h-50 w-auto" />
          {links.map(({ id, title, link, att }) => (
            <li key={id} className="p-4 text-xl capitalize">
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
