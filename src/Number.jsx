import React from "react";

import { useSelector } from "react-redux";

const Number = () => {
  // try to get `count` from store.js

  // this is a hook. it follows all the rules of hooks
  // it takes in a function as an argument
  // in the function, it takes in the "current state of the store"
  const count = useSelector((state) => {
    return state.count;
  });

  return <h1>{count}</h1>;
};

export default Number;
