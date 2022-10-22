import React from "react";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { name, room } = useParams();
  console.log(name, room);
  return (
    <div>
      <h1>Chat</h1>
    </div>
  );
};

export default Chat;
