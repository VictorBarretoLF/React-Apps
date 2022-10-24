import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import InfoBar from "../InfoBar/InforBar";
import "./Chat.css";

let socket;

const Chat = () => {
  const { name, room } = useParams();
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket = io("localhost:5000");

    // handling error on the frontend
    // socket.emit("join", { name, room }, (error) => {
    //   alert("an error ocurred");
    // });

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [name, room]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  // function for sending messages
  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
      </div>
    </div>
  );
};

export default Chat;
