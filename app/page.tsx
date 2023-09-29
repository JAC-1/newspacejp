"use client";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

export default function Home() {
  const { data, status } = useSession();

  return (
    <div id="container" className="flex flex-row-reverse overflow-hidden ">
      <div className="flex flex-col h-full mt-24 z-10">
        <h1 className="md:text-welcomeSize text-8xl md:text-left whitespace-normal text-center px-8 font-be mt-14">
          Welcome to NewSpace
        </h1>
        <h2 className="md:text-2xl px-8 py-8 whitespace-nowrap self-start">
          Your next reading comprehension boost 🚀
        </h2>
        {status === "authenticated" ? (
          <div className="flex flex-col h-full">
            <h3 className="text-2xl">Welcome back, {data.user.name}!</h3>
            <Link href={"/articles"}>
              <button className="text-2xl">Continue Reading</button>
            </Link>
          </div>
        ) : (
          <Link
            href={"/about"}
            className="flex justify-center bg-green-500 text-white md:w-startButtonW py-4 px-6 md:py-5 md:px-32 rounded-xl self-center md:self-start md:my-52 md:mx-6 m-15 hover:bg-green-600"
          >
            <span className="md:text-2xl text-xl whitespace-nowrap">
              Start Learning
            </span>
          </Link>
        )}
      </div>
      <div
        className="z-0 absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat opacity-20 "
        style={{
          backgroundImage: "url('/newspaperbackground.jpg')",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      ></div>
    </div>
  );
}
