import React from "react";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => {
  const onChangeHandler = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const onKeyPress = (e) => (e.key === "Enter" ? sendMessage(e) : null);

  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={onChangeHandler}
        onKeyPress={onKeyPress}
      />
      <button className="sendButton" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </form>
  );
};

export default Input;
