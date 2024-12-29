import express, { application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import ConnectToDb from './config/db.js'

const app = express();
dotenv.config();
ConnectToDb();


app.get("/",(req,res)=>{
  console.log("This is message is from / ")
})
//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const PORT_NUMBER = process.env.PORT ;
app.listen(PORT_NUMBER , ()=>{
  console.log(`Server is listening on port`,PORT_NUMBER);
})

