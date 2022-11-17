import React from "react";

import { MdAdd } from "react-icons/md";

import Card from "../Card";

import { Container } from "./styles";

const index = () => {
  return (
    <header>
      <h2>Tarefas</h2>
      <button type="button">
        <MdAdd size={24} color="#FFF" />
      </button>

      <ul>
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </header>
  );
};

export default index;
