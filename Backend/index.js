import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import userRoute from './routes/userRoute.js'
import tweetRoute from './routes/tweetRoute.js'

const app = express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(cors({
    origin:true,
    methods:['GET','PUT','POST','DELETE'],
    credentials:true
}));

mongoose.connect(process.env.MONGOURI)
.then(()=>console.log("DB is connected"))
.catch((err)=>console.log(err))

// routes
app.use("/api/v1/user",userRoute)
app.use("/api/v1/tweet",tweetRoute)


app.listen(process.env.PORT,()=>{
    console.log(`Port is runing on ${process.env.PORT}`)
})