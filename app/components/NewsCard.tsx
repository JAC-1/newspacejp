"use client";

import { useState } from "react";

// https://newsapi.org/v2/top-headlines?country=jp&apiKey=b4a3e5178b6a48abbc9e71dcee047e96

export default function NewsCard({ props }: any) {
  const localIndex = localStorage.getItem("index");
  const indexStart = localIndex ? Number(localIndex) : 0;
  const [currentIndex, setCurrentIndex] = useState(indexStart);

  const restart = () => {
    setCurrentIndex((p) => (p = 0));
    localStorage.clear();
  };

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

  return (
    <div>
      <h1>{currentIndex}</h1>
      <div id="heading">
        <h1>{props[currentIndex].title}</h1>
        <h4>{props[currentIndex].author}</h4>
        <p>{props[currentIndex].publishedAt}</p>
      </div>
      <div id="description">
        <h2>{props[currentIndex].description}</h2>
      </div>
      <div id="url">{props[currentIndex].url}</div>
      <button
        onClick={() => nextArticle()}
        className="absolute bottom-0 right-0"
      >
        Next
      </button>
    </div>
  );
}
