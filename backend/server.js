// imports
import express from 'express'
import dotenv from "dotenv"
dotenv.config()

// app config
const app = express()
const port = process.env.PORT || 5000

// middlewares 

app.use(express.json());
app.use(express.urlencoded({extended: true, limit: '5mb'}))

// db config

// app endpoints

// app listener

app.listen(port, () => console.log(`Listening on port ${port}`))