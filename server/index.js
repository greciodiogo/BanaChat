import express from "express";
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from "mongoose";

import router_conversation from './routes/conversation.js'
import router_message from './routes/message.js'
import router_user from './routes/user.js'

const app = express()
app.use(bodyParser.json({extend: true, limit: "30mb"}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))
app.use(cors())

app.use('/api',router_conversation,router_message,router_user)

const CONNECTION_URL = "mongodb://localhost/banamedia"
const PORT = process.env.PORT || 5000

mongoose
    .connect(CONNECTION_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>
    app.listen(PORT, ()=> console.log(`Server is running on port: ${PORT}...`))
    )
    .catch(()=>console.log("Erro na conexao com a base de dados"))
