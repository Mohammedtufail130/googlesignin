const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
require('./models/dbConnection');
const authRouter = require('./routes/authRouter');
const cors = require('cors');
import cors from 'cors'


app.use(cors({
    origin: ["http://localhost:3000","https://studioin.netlify.app"]
}));

app.use(cors());
app.get('/', (_req, res)=>{
    res.send('Hello From Auth Server');
})

app.use('/auth', authRouter )
app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
})