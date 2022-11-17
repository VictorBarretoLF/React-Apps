import React from "react";
import { loadLists } from "../../services/api";

import List from "../List";

import { Container } from "./styles";

const lists = loadLists();

const index = () => {
  return (
    <Container>
      {lists.map((list) => {
        return <List key={list.title} data={list} />;
      })}
    </Container>
  );
};

export default index;
