import { Avatar, IconButton } from '@material-ui/core'
import MoreVert from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import AttachFile from '@material-ui/icons/AttachFile'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import React, { useEffect, useState } from 'react'
import './Chat.css'

import Picture from './assets/me.jpg'
function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");

    useEffect (() => {
        setSeed(Math.floor(Math.random() * 5000));

    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("You typed >>> ",input)
        setInput("")
    }
  return (
    <div className='chat'>
        <div className='chat__header'>
            <img src={Picture} alt=""/>
            <div className='chat__headerInfo'>
                <h3>Grécio Diogo</h3>
                <p>Last seen at ...</p>
            </div>
            <div className='chat__headerRight'>
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>

            </div>
        </div>
        <div className='chat__body'>
            <p className={`chat__message ${false && 'chat__reciever'}`}>
            {/* <span className='chat__name'>Grécio Diogo</span> */}
            Hey Guys
            <span className='chat__timestamp'>3:15pm</span>
            </p>
            <p className={`chat__message ${false && 'chat__reciever'}`}>
            {/* <span className='chat__name'>Grécio Diogo</span> */}
            Hey Guys
            <span className='chat__timestamp'>3:15pm</span>
            </p>
            <p className={`chat__message ${true && 'chat__reciever'}`}>
            {/* <span className='chat__name'>Grécio Diogo</span> */}
            Hey Guys
            <span className='chat__timestamp'>3:15pm</span>
            </p>
            <p className={`chat__message ${true && 'chat__reciever'}`}>
            {/* <span className='chat__name'>Grécio Diogo</span> */}
            What are you doing?
            <span className='chat__timestamp'>3:15pm</span>
            </p>
        </div>
        
        <div className='chat__footer'>
            <InsertEmoticonIcon/>
            <form>
                <input value={input} onChange={e => setInput(e.target.value)} 
                type="text" placeholder='Type a message' />
                <button onClick={sendMessage}
                type='submit'>Send a message</button>
            </form>
            <MicIcon />
        </div>
    </div>
  )
}

export default Chat
