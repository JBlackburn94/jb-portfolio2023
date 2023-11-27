import Image from "next/image";
import Header from "/public/Welcome.svg";

export default function Home() {
  return (
    <main>
      <section className="h-screen flex flex-col justify-start items-center m-4">
        <div className="flex flex-col justify-center items-center bg-black bg-opacity-50 w-full md:w-1/2 rounded-lg">
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
      </section>
    </main>
  );
}
