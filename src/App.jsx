import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import IncrementButton from "./IncrementButton";

import NumberDisplay from "./NumberDisplay";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <IncrementButton />
      <NumberDisplay count={count} />
    </div>
  );
}

export default App;
