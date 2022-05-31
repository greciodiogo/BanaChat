import { IconButton } from '@material-ui/core'
import MoreVert from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import AttachFile from '@material-ui/icons/AttachFile'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Chat.css'

import Picture from './assets/me.jpg'
import Message from './Message'

function Chat() {
    // const [seed, setSeed] = useState("");
    const [newMessage, setNewMessage] = useState("");
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    // const [conversation, setConversation] = useState([]);

    const sendMessage = async (e) => {
        e.preventDefault();
        setNewMessage("")
        const message = {
            sender: '62927057f98a4a2bdd900fbe',
            text: newMessage,
            conversationId: '6294d792eafcdd08dbcd2bbd'
        }
        try{
            const res = await axios.post('http://localhost:5000/api/messages',message)
            setMessages([...messages,res.data])
        }catch(err){
            console.log("Erro no post message",err)
        }
    }

    // useEffect(()=>{
    //     const getConversations = async () => {
    //         try{
    //             const res = await axios.get("http://localhost:5000/api/conversations/")
    //             setConversation(res.data)
    //             console.log(res)
    //         }catch{
    //             console.log("erro na requisição da api")
    //         }
    //     }
    //     getConversations()
    // },[])
    useEffect(()=>{
        const getMessages = async () => {
            try{
                const res = await axios.get("http://localhost:5000/api/messages/6294d792eafcdd08dbcd2bbd")
                setMessages(res.data)
            }catch(err){
                console.log("Erro na requisiçao das mensagens "+err)
            }
        }
        getMessages()
    },[])
  return (
    <div className='chat'>
        <div className='chat__header'>
            <img src={Picture} alt=""/>
            <div className='chat__headerInfo'>
                <h3>Grécio Diogo</h3>
                <p>Last seen at ...</p>
            </div>
            <div className='chat__headerRight'>
                <IconButton><SearchOutlined /></IconButton>
                <IconButton><AttachFile /></IconButton>
                <IconButton><MoreVert /></IconButton>
            </div>
        </div>
        <div className='chat__body'>
            {messages.map((msg,index)=>(
                <Message message={msg} owner={ msg.sender === '62927057f98a4a2bdd900fbe' } key={index}/>
            ))}
        </div>
        
        <div className='chat__footer'>
            <InsertEmoticonIcon/>
            <form>
                <input value={newMessage} onChange={e => setNewMessage(e.target.value)} 
                type="text" placeholder='Type a message' />
                <button onClick={sendMessage} type='submit'>Send a message</button>
            </form>
            <MicIcon />
        </div>
    </div>
  )
}

export default Chat
