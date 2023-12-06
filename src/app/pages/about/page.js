import aboutHeader from "/public/About.svg";
import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-start h-screen">
      <div className="flex flex-col items-center justify-center w-3/4 p-8 bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-3xl text-[#00FFD1] font-bold">Hello!</h1>
        <p className="w-1/2 leading-8 text-center">
          My name is Jason. I am an experienced and versatile Front-end
          Developer based in London, UK. Adept at navigating all facets of web
          development. Proven expertise in user interface design, production,
          testing, and debugging, with a keen focus on database creation and
          management. Proficient in an array of technologies, including HTML,
          CSS, JavaScript, React, Next.Js, Git/GitHub, Jest,
          Bootstrap/TailwindCSS, Python, and SQL
        </p>
      </div>
    </section>
  );
}
