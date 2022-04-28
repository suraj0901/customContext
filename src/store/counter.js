import { useState } from "react";
import { createContext } from "./customContext.js";

// export const useCounter2 = (state = 0) => {
//   const [newState, setState] = useState(state);
//   console.log("counter");
//   const setNewState = (value) => setState((val) => ++val);
//   return [newState, setNewState];
// };

// const context = (initialState) => {
//   let state = initialState;
//   const setState = (value) => {
//     if (typeof value === "function") value = value(state);
//     state = value;
//   };
//   return () => {
//     return [state, setState];
//   };
// };

// export const useCounter = () => {};

export const useCounter = createContext(0);
