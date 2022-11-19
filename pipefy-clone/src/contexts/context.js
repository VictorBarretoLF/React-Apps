import { createContext, useState } from "react";
import { loadLists } from "../services/api";

export const BoardContext = createContext({});

const data = loadLists();

export const BoardContextProvider = ({ children }) => {
  const [lists, setLists] = useState(data);

  const move = (from, to) => {
    console.log(from, to);
  };

  return (
    <BoardContext.Provider value={{ lists, move }}>
      {children}
    </BoardContext.Provider>
  );
};
