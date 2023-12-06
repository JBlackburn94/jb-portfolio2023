"use client";
import Image from "next/image";
import Header from "/public/Welcome.svg";
import skillsHeader from "/public/Skills.svg";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Home() {
  const buttonLinks = [
    {
      id: "1",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/jason-blackburn-376597144/",
      att: "_blank",
    },
    {
      id: "2",
      title: "GitHub",
      link: "https://github.com/JBlackburn94",
      att: "_blank",
    },
  ];

  const skillsList = [
    {
      id: "1",
      title: "HTML",
      icon: <FaHtml5 className="w-10 h-auto" />,
    },
    {
      id: "2",
      title: "CSS",
      icon: <FaCss3Alt className="w-10 h-auto" />,
    },
    {
      id: "3",
      title: "JavaScript",
      icon: <IoLogoJavascript className="w-10 h-auto" />,
    },
    {
      id: "4",
      title: "React",
      icon: <FaReact className="w-10 h-auto" />,
    },
    {
      id: "5",
      title: "Next.Js",
      icon: <TbBrandNextjs className="w-10 h-auto" />,
    },
    {
      id: "6",
      title: "MySQL",
      icon: <SiMysql className="w-10 h-auto" />,
    },
    {
      id: "7",
      title: "GitHub",
      icon: <FaGithub className="w-10 h-auto" />,
    },
  ];

  return (
    <main>
      <section className="flex flex-col items-center justify-start h-screen m-4">
        <div className="flex flex-col items-center justify-center w-full mt-10 bg-black bg-opacity-50 rounded-lg md:w-1/2">
          <Image
            src={Header}
            alt="An image showing the text welcome"
            className="w-1/2 mt-0 md:mt-[-50px]"
          />
          <p className="text-center w-1/2 mt-[-50px] mb-10 md:mt-[-150px]">
            Hello, my name is Jason. I am a frontend developer living in London,
            UK.
          </p>
        </div>
        <div className="flex items-center justify-center mt-10">
          {buttonLinks.map(({ id, title, link, att }) => (
            <a
              href={link}
              key={id}
              target={att}
              className="w-32 p-4 mx-4 text-center duration-200 bg-black bg-opacity-50 rounded-md hover:text-black hover:bg-white hover:scale-110"
            >
              {title}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center w-full mt-2">
          <Image
            src={skillsHeader}
            alt="A heading for the skills section"
            className="w-auto h-px-1000"
          />
          <ul className="flex flex-wrap items-center justify-center p-4 bg-black bg-opacity-50 rounded-lg">
            {skillsList.map(({ id, title, icon }) => (
              <li
                key={id}
                className="flex flex-col items-center justify-center mx-4 mt-4 md:mt-0"
              >
                {icon}
                <p className="hidden md:block">{title}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
