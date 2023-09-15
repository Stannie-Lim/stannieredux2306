import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import IncrementButton from "./IncrementButton";

import NumberDisplay from "./NumberDisplay";

function App() {
  return (
    <div>
      <IncrementButton />
      <NumberDisplay />
    </div>
  );
}

export default App;
