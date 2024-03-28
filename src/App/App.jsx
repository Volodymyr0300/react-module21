import { useState } from "react";
import ClickCounter from "./ClickCounter/ClickCounter";

const App = () => {
  const [clicks, setClicks] = useState({
    a: 0,
    b: 0,
  });

  const handelClick = (key) => {
    setClicks({
      ...clicks,
      [key]: clicks[key] + 1,
    });
  };

  return (
    <div>
      <ClickCounter value={clicks.a} onTrack={() => handelClick("a")}>
        Click a
      </ClickCounter>
      <ClickCounter value={clicks.b} onTrack={() => handelClick("b")}>
        Click b
      </ClickCounter>
      <p>Total clicks: {clicks.a + clicks.b}</p>
    </div>
  );
};

export default App;
