import express, { application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import ConnectToDb from './config/db.js'
import tourRouter from './routes/tour-route.js';
import UserRouter from './routes/user-route.js';
import AuthRouter from './routes/auth-route.js';
import ReviewRouter from './routes/reviews-route.js';

// const bus = new EventEmitter();
const app = express();
const corsOptions = {
  origin:true,
  credentials:true,
}

// bus.setMaxListeners(20);
dotenv.config();
ConnectToDb();

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

//Tours Routes here

app.use("/api/v1/tours",tourRouter);
app.use("/api/v1/users",UserRouter);
app.use("/api/v1/auths",AuthRouter);
app.use("/api/v1/reviews",ReviewRouter)

const PORT_NUMBER = process.env.PORT ;
app.listen(PORT_NUMBER , ()=>{
  console.log(`Server is listening on port`,PORT_NUMBER);
})

