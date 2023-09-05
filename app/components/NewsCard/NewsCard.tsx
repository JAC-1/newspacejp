"use client";

import { useState } from "react";
import NextButton from "../NewsCard/NextButton";
import SaveButton from "../NewsCard/SaveButton";
import BackButton from "../NewsCard/BackButton";
import { Article } from "@prisma/client";
import { Play } from "next/font/google";

// https://newsapi.org/v2/top-headlines?country=jp&apiKey=b4a3e5178b6a48abbc9e71dcee047e96

export default function NewsCard({ props }: any) {
  let localIndex = 0;
  try {
    localIndex = Number(localStorage.getItem("index"))
  } catch(e) {
    console.log("No local storage. Staring at 0")
  }
  const [currentIndex, setCurrentIndex] = useState(localIndex);

  const restart = () => {
    setCurrentIndex((p) => (p = 0));
    localStorage.clear();
  };

  const back = () => {
    const newIdx = currentIndex - 1;
    if (newIdx <= -1) {
      return;
    }

    setCurrentIndex((p) => (p = newIdx));
    localStorage.setItem("index", newIdx.toString());
  };

  // TODO: Add a congrats with confetii
  if (Number(currentIndex) == props.length) {
    localStorage.clear();
    return (
      <>
        <h1>End of articles</h1>
        <button onClick={() => restart()}>Restart</button>
      </>
    );
  }

  const nextArticle = () => {
    setCurrentIndex((prevIndex) => Number(prevIndex) + 1);
    localStorage.setItem("index", (currentIndex + 1).toString());
  };

  const saveArticle = async (id: string) => {
    try {
      await fetch("/api/saveNews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ articleId: id }),
      });
      console.log("Saved!");
    } catch (e) {
      console.log("An error has occured: ", e);
    } finally {
      console.log(id);
    }
  };

  return (
    <div className="flex flex-col">
      <div
        id="news-container"
        className=" flex flex-col justify-self-center max-w-lg w-auto h-auto mt-20"
      >
        <div id="heading" className="">
          <BackButton handleClick={() => back()} />
          <div id="name-and-source" className="pb-10 pt-5">
            <h3 className="text-xl text-right">
              {props.sourceName}
            </h3>
            <h4 className="text-lg text-right">
              <span className="text-xs pr-2">publisher:</span>
              {props.author}
            </h4>
          </div>
          <h1 className="text-xl  mb-10">{props.title}</h1>
        </div>
        <div id="content">{props?.content ?? null}</div>
        <div className="">{props?.publishedAt ?? null}</div>
        <a
          href={props.url}
          target="_blank"
          className="text-xs self-center m-4 mt-5 py-1 px-4 bg-neutral-700 hover:bg-customPink  rounded-md"
        >
          Read More
        </a>
      </div>
      <p>{props.id}</p>
      <div className="w-auto flex flex-row gap-10 justify-center h-80 mt-auto">
        <SaveButton
          arrow="&#x2193;"
          articleId={props.id}
        />
        <NextButton
          arrow="&#x2192;"
          handleClick={() => nextArticle()}
        />
      </div>
    </div>
  );
}
