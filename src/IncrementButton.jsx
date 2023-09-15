import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "./store";

const IncrementButton = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    // this is like asking the librarian to do something for you
    // it's an "action"
    dispatch(increment());
  };

  return <button onClick={onClick}>+</button>;
};

// default export
export default IncrementButton;
