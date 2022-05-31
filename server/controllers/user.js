import User from "../models/user.js"

export const createUser = async (req, res) => {
    const newUser = new User(req.body)
    try{
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    }catch(err){
        // res.status.json(err)
        res.send("Erro")
    }
}

export const getUser = async (req, res) => {
    try{
        const user = await User.findOne({
            _id: req.params.userId
        })
        
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
}


export const getAllUser = async (req, res) => {
    try{
        const user = await User.find()
        res.status(200).json(user)
    }catch(err){
        res.status(404).send("Not found any user!!!")
    }
}