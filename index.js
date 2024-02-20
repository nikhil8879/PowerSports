const express = require('express');
const connectToMongo = require('./db')
var cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./Routes/User'));
app.use('/api/Comm', require('./Routes/Community'));
app.use('/api/Rel', require('./Routes/Relation'));
app.use('/api/Post', require('./Routes/Post'));

const server = app.listen(port, () => {
    console.log(`Example app listening `)
})
connectToMongo();
