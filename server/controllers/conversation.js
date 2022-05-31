import Conversation from "../models/Conversation.js"

export const createConversation = async (req, res) => {
    const newConversation = new Conversation({
        members: [req.body.senderId,req.body.receiverId]
    })
    try{
        const savedConversation = await newConversation.save()
        res.status(200).json(savedConversation)
    }catch(err){
        // res.status.json(err)
        res.send("Erro")
    }
}

export const getConversation = async (req, res) => {
    try{
        const conversation = await Conversation.find({
            members: { $in: [req.params.conversationId] },
        })
        
        res.status(200).json(conversation)
    }catch(err){
        res.status.json(err)
    }
}

export const getAllConversation = async (req, res) => {
    try{
        const conversation = await Conversation.find()
        res.status(200).json(conversation)
    }catch(err){
        res.status(404).send("Not found any rows!!!")
    }
}