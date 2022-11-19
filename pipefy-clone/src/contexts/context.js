import { createContext, useState } from "react";
import { loadLists } from "../services/api";
import produce from "immer";

export const BoardContext = createContext({});

const data = loadLists();

export const BoardContextProvider = ({ children }) => {
  const [lists, setLists] = useState(data);

  const move = (fromList, from, to) => {
    console.log(fromList);
    const nextState = produce(lists, (draft) => {
      const dragged = draft[fromList].cards[from];
      draft[fromList].cards.splice(from, 1);
      draft[fromList].cards.splice(to, 0, dragged);
    });
    setLists(nextState);
    // console.log(from, to, nextState);
  };

  return (
    <BoardContext.Provider value={{ lists, move }}>
      {children}
    </BoardContext.Provider>
  );
};
