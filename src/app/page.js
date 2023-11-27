import Image from "next/image";
import Header from "/public/Welcome.svg";

export default function Home() {
  return (
    <main>
      <section className="h-screen flex justify-evenly items-start">
        <div className="w-full rounded-lg bg-opacity-50 h-1/2 bg-black flex justify-start items-center flex-col m-4">
          <Image
            src={Header}
            alt="A heading image that says welcome"
            className="h-auto w-1/2"
          />
          <p className="text-center">
            My name is Jason, I'm a Frontend Developer living in London, UK.
          </p>
        </div>
      </section>
    </main>
  );
}
