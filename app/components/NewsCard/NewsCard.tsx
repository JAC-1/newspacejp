"use client";

import { useState, useEffect } from "react";
import NextButton from "../NewsCard/NextButton";
import SaveButton from "../NewsCard/SaveButton";
import BackButton from "../NewsCard/BackButton";

// https://newsapi.org/v2/top-headlines?country=jp&apiKey=b4a3e5178b6a48abbc9e71dcee047e96

export default function NewsCard({ props }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextArticle = () => {
    setCurrentIndex((prevIndex) => Number(prevIndex) + 1);
  };

  const resetIndex = () => {
    setCurrentIndex(0);
  };

  // TODO: Error page or message when there are no articles to show
  return (
    <div className="flex flex-col col-start-2">
      <div
        id="news-container"
        className=" flex flex-col justify-self-center max-w-lg w-auto  mt-20"
      >
        <div id="heading" className="">
          <BackButton handleClick={() => resetIndex()} />
          <div id="image" className="w-full h-84">
            <img
              className="w-full h-full object-cover rounded-md"
              src={
                props[currentIndex]?.urlToImage ??
                "../../public/newspaperbackground.jpg"
              }
              alt="article image"
            />
          </div>
          <div id="name-and-source" className="pb-10 pt-5">
            <h3 className="text-xl text-right">
              {props[currentIndex]?.sourceName}
            </h3>
            <h4 className="text-lg text-right">
              <span className="text-xs pr-2">publisher:</span>
              {props[currentIndex]?.author}
            </h4>
          </div>
          <h1 className="text-sans text-3xl  mb-10">
            {props[currentIndex]?.title}
          </h1>
        </div>
      </div>

      <div className="">{props[currentIndex]?.publishedAt ?? null}</div>
      <a
        href={props[currentIndex]?.url}
        target="_blank"
        className="text-md self-center m-4 mt-12 py-1 px-4 bg-neutral-700 hover:bg-customPink  rounded-md"
      >
        Read More
      </a>
      <div className="w-auto flex flex-row md:gap-10 gap-5 justify-center h-80 mt-12 mb-20">
        <SaveButton arrow="&#x2193;" articleId={props[currentIndex]?.id} />
        <NextButton arrow="&#x2192;" handleClick={() => nextArticle()} />
      </div>
    </div>
  );
}
