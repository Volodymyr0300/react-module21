import { useState } from "react";
import articles from "./articles.json";

const App = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handlePref = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  const visibleArticle = articles[selectedIdx];

  const isPrevDisabled = selectedIdx === 0;
  const isNextDisabled = selectedIdx === articles.length - 1;

  return (
    <div>
      <div>
        <button disabled={isPrevDisabled} onClick={handlePref}>
          Prev
        </button>
        <button disabled={isNextDisabled} onClick={handleNext}>
          Next
        </button>
      </div>
      <p>
        {selectedIdx + 1}/{articles.length}
      </p>
      <article>
        <h1>{visibleArticle.topic}</h1>
        <p>{visibleArticle.text}</p>
      </article>
    </div>
  );
};

export default App;
