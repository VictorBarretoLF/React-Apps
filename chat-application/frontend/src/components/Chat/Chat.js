import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";

let socket;

const Chat = () => {
  const { name, room } = useParams();

  useEffect(() => {
    socket = io("localhost:5000");

    socket.emit("join", { name, room });
  }, [name, room]);

  return (
    <div>
      <h1>Chat</h1>
    </div>
  );
};

export default Chat;
