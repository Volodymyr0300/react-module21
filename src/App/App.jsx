import { useState } from "react";
import ClickCounter from "./ClickCounter/ClickCounter";

const App = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
    </>
  );
};

export default App;
