import React, { useContext } from "react";
import { BoardContext } from "../../contexts/context";
import { loadLists } from "../../services/api";

import List from "../List";

import { Container } from "./styles";

const Board = () => {
  const { lists } = useContext(BoardContext);

  return (
    <Container>
      {lists.map((list) => {
        return <List key={list.title} data={list} />;
      })}
    </Container>
  );
};

export default Board;
