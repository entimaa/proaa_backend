import express from "express";
import cors from 'cors';
import mongoose from "mongoose"; 



const app = express()
app.use(cors())

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/api/sendDate',(req,res) => {
    return res.status(200).json({
        message: 'hello from the other side '
    })
})

const port = 5001;
app.listen(port , () => {
    console.log(`server is working on port ${port}`);
})