import css from "../App/App.module.css";
import { useState } from "react";
import ClickCounter from "./ClickCounter/ClickCounter";

function App() {
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  console.log(!isOpen);

  return (
    <>
      <button onClick={handleClick}>Current: {clicks}</button>
      <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && <p>Now you can see me!</p>}
      <ClickCounter />
      <ClickCounter />
    </>
  );
}

export default App;
