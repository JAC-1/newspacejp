"use client";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import Information from "./components/Landing/Information";
import Testimonials from "./components/Landing/Testimonials";

export default function Home() {
  const { data, status } = useSession();

  return (
    <div id="container" className="flex flex-col  ">
      <div className="flex flex-col h-full mt-24 z-10">
        {status === "authenticated" ? (
          <>
            <h1 className="md:text-welcomeSize text-8xl md:text-left whitespace-normal text-center px-8 font-be mt-14">
              Welcome back to NewSpace
            </h1>
            <div className="flex flex-col h-full">
              <h3 className="text-3xl font-bold self-center pb-10 md:self-start md:px-9">
                Welcome back, {data?.user?.name}!
              </h3>
              <Link
                href={"/articles"}
                className="flex justify-center bg-green-500 text-white md:w-startButtonW  py-4 px-6 md:py-5 md:px-32 rounded-xl  self-center md:self-start md:my-12 md:mx-6 m-15 hover:bg-green-600"
              >
                <button className="md:text-2xl text-xl whitespace-nowrap">
                  Continue Reading
                </button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <h1 className="md:text-welcomeSize text-8xl md:text-left whitespace-normal text-center px-8 font-be mt-14">
              Welcome to NewSpace
            </h1>
            <h2 className="md:text-2xl px-8 py-8 whitespace-nowrap self-start">
              Your next reading comprehension boost 🚀
            </h2>
            <Link
              href={"/api/auth/signin"}
              className="flex justify-center bg-green-500 text-white md:w-startButtonW w-startButtonWMobile  py-4 px-6 md:py-5 md:px-32 rounded-xl self-center md:self-start md:my-52 md:mx-6 m-15 hover:bg-green-600"
            >
              <span className="md:text-2xl text-xl whitespace-nowrap">
                Start Learning
              </span>
            </Link>
          </>
        )}
      </div>
      <Information />
      <Testimonials />
      <div
        className="absolute w-screen inset-0 bg-cover bg-center bg-fixed bg-no-repeat opacity-20 h-3/4 md:h-screen"
        style={{
          backgroundImage: "url('/newspaperbackground.jpg')",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      ></div>
    </div>
  );
}
