const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 'https://googlesignin-two.vercel.app';
require('./models/dbConnection');
const authRouter = require('./routes/authRouter');
const cors = require('cors');

app.use(cors());
app.get('/', (_req, res)=>{
    res.send('Hello From Auth Server');
})

app.use('/auth', authRouter )
app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`);
})