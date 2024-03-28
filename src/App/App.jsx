import { useState } from "react";
import articles from "./articles.json";
import Controls from "./Controls/Controls";
import Progress from "./Progress/Progress";
import ArticleView from "./ArticleView/ArticleView";

const App = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handlePref = () => {
    setSelectedIdx(selectedIdx - 1);
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

  const visibleArticle = articles[selectedIdx];
  const isFirst = selectedIdx === 0;
  const isLast = selectedIdx === articles.length - 1;
  const current = selectedIdx + 1;
  const total = articles.length;

  return (
    <div>
      <Controls
        first={isFirst}
        last={isLast}
        onPrev={handlePref}
        onNext={handleNext}
      />
      <Progress current={current} total={total} />
      <ArticleView article={visibleArticle} />
    </div>
  );
};

export default App;
