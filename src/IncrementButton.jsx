import React from "react";

import { useSelector } from "react-redux";

const IncrementButton = () => {
  const count = useSelector((state) => {
    return state.count;
  });

  return <button>{count}</button>;
};

// default export
export default IncrementButton;
