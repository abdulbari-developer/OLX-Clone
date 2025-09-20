import express from 'express'
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'
import  client  from './config.js';
import cookieParser  from 'cookie-parser'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import cors from "cors"
dotenv.config();
client.connect();
console.log("You successfully connected to MongoDB!");

const app = express()
const port = 3003
app.use(cors())
app.use(express.json());
app.use(cookieParser())



app.use('/user',authRoutes) 

app.use((req, res, next) => {
  try{
    let decoded = jwt.verify(req.cookies.token, process.env.SECRET);
    next()
  }catch(error){
    return res.send({
      status : 0,
      error : error,
      message : "Invalid Token"
    })
  }
  
})


app.use(productRoutes) 


app.listen(port, () => {
  console.log(`Example app listening on port ${ port }`)
})