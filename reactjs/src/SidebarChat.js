import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SidebarChat.css";
import Conversation from "./Conversation";

function SidebarChat({ addNewChat }) {
  // const [username, setUsername] = useState('')
  const [conversation, setConversation] = useState([]);
  //processo aleatorio de seleção dos icons avatares
  // const [seed, setSeed] = useState('')
  const currentId = "62927057f98a4a2bdd900fbe"
  
  useEffect(() => {
    // setSeed(Math.floor(Math.random() * 5000));
    const getConversations = async () => {
      
      try {
        const url = "http://localhost:5000/api/conversations/"+currentId;
        const res = await axios.get(url);
        console.log(res.data);
        setConversation(res.data);
      } catch (err) {
        console.log("erro");
      }
    };
    getConversations();
  }, [currentId]);
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      //do some clever database stuff...
    }
  };
  return !addNewChat ? (
    <>
    {conversation.map((c,index)=>(
      <Conversation  currentId={currentId} conversation={c} key={index}/>
      ))}
    </>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;
