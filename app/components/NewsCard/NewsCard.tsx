"use client";

import { useState } from "react";
import NextButton from "../NewsCard/NextButton";
import SaveButton from "../NewsCard/SaveButton";
import BackButton from "../NewsCard/BackButton";

// https://newsapi.org/v2/top-headlines?country=jp&apiKey=b4a3e5178b6a48abbc9e71dcee047e96

export default function NewsCard({ props }: any) {
  const localIndex = localStorage.getItem("index");
  const indexStart = localIndex ? Number(localIndex) : 0;
  const [currentIndex, setCurrentIndex] = useState(indexStart);

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

  const saveArticle = () => {
    console.log("Saved!");
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
              {props[currentIndex].sourceName}
            </h3>
            <h4 className="text-lg text-right">
              <span className="text-xs pr-2">publisher:</span>
              {props[currentIndex].author}
            </h4>
          </div>
          <h1 className="text-sans text-3xl  mb-10">{props[currentIndex].title}</h1>
        </div>
        <div className="">{props[currentIndex]?.publishedAt ?? null}</div>
        <a
          href={props[currentIndex].url}
          target="_blank"
          className="text-md self-center m-4 mt-12 py-1 px-4 bg-neutral-700 hover:bg-customPink  rounded-md"
        >
          Read More
        </a>
      </div>
      <div className="w-auto flex flex-row md:gap-10 gap-5 justify-center h-80 mt-12">
        <SaveButton
          arrow="&#x2193;"
          handleClick={() => {console.log()}}
        />
        <NextButton
          arrow="&#x2192;"
          handleClick={() => nextArticle()}
        />
      </div>
    </div>
  );
}
