import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import './SidebarChat.css'

function SidebarChat({addNewChat}) {
  //processo aleatorio de seleção dos icons avatares
  const [seed, setSeed] = useState('') 
  useEffect (() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [])
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      //do some clever database stuff...
    }

  }
  return !addNewChat ? (
    <div className='sidebarChat'>
      <Avatar/>
      <div className='sidebarChat__info'>
        <h2>Santos Diogo</h2>
        <p>I got it</p>
      </div>
    </div>
  ): (
      <div onClick={createChat}
      className="sidebarChat">
        <h2>Add new Chat</h2>
      </div>
  );
}

export default SidebarChat
