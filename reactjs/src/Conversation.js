import React, { useEffect, useState }from 'react'
import { Avatar } from "@material-ui/core";
import axios from 'axios'
import './Conversation.css'

const Conversation = ({conversation, currentId}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const friendId = conversation.members.find((member)=> member !== currentId)
        
        const getUser = async () => {
            try{
                const res = await axios.get("http://localhost:5000/api/user?userId=" + friendId) 
                setUser(res.data)
            }catch(err){
                console.log("Erro na requisição do url da api, "+err)
            }
        }
        getUser()
    },[currentId,conversation])
    return (
      <div className="sidebarChat">
        <Avatar />
        <div className="sidebarChat__info">
          <h2>Santos Diogo</h2>
          <p>did you see?</p>
        </div>
      </div>
  )
}

export default Conversation
