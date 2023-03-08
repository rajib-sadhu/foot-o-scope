require('dotenv').config();
import express = require("express");
import cors from 'cors';
const app = express();
const PORT:number = 8089 || process.env.PORT;

import mainRoute from './routes/mainRoute';

app.get("/",(req,res)=>{
    res.send('go to the /admin/blog')
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(mainRoute);

app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`);

})
