import Message from "../models/Message.js"

export const createMessage = async (req, res) => {
    const newMessage = new Message(req.body)
    try{
        const savedMessage = await newMessage.save()
        res.status(200).json(savedMessage)
    }catch(err){
        // res.status.json(err)
        res.send("Erro")
    }
}

export const getMessage = async (req, res) => {
    try{
        const messages = await Message.find({
            members: { $in: [req.params.messageId] },
        })
        
        res.status(200).json(messages)
    }catch(err){
        res.status(500).json(err)
    }
}


export const getAllMessage = async (req, res) => {
    try{
        const message = await Message.find()
        res.status(200).json(message)
    }catch(err){
        res.status(404).send("Not found any rows!!!")
    }
}