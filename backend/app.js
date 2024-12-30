import express, { application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import ConnectToDb from './config/db.js'
import tourRouter from './routes/tour-route.js';
import UserRouter from './routes/user-route.js';
// import EventEmitter from 'events';

// const bus = new EventEmitter();
const app = express();


// bus.setMaxListeners(20);
dotenv.config();
ConnectToDb();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

//Tours Routes here

app.use("/tours",tourRouter);
app.use("/users",UserRouter);

const PORT_NUMBER = process.env.PORT ;
app.listen(PORT_NUMBER , ()=>{
  console.log(`Server is listening on port`,PORT_NUMBER);
})

