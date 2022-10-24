import { useState } from "react";
import "./App.css";
import { getColor } from "./color-service";

export function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("red");

  return (
    <div>
      <h1>Ada School - React Hooks</h1>

      <div>
        <span className={color}>Counter:{counter}</span>
      </div>

      <button>Increase</button>
      <button>Decrease</button>
      <button>Reset</button>
    </div>
  );
}
