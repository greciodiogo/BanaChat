import React from "react";
import './Message.css'

function Message({message,owner}) {
const own = owner
return (
      <p className={`chat__message ${own && "chat__reciever"}`}>
        <span className="chat__name">{message.sender}</span>
        {message.text}
        <span className="chat__timestamp">{message.createdAt}</span>
      </p>
  );
}

export default Message;
