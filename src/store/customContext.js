import { useEffect, useState } from "react";

const rerender = (list) => {
  for (const render of list) {
    render((val) => !val);
  }
};

export const createContext = (state) => {
  let list = [];
  const setState = (value) => {
    if (typeof value === "function") value = value(state);
    state = value;
    rerender(list);
  };
  return (shouldListen = true) => {
    const rerender = useState(false)[1];
    useEffect(() => {
      if (shouldListen) {
        list.push(rerender);
        return () => {
          list = list.filter((l) => l !== rerender);
        };
      }
    }, []);
    return [state, setState];
  };
};
