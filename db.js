const mongoose = require('mongoose');
require('dotenv').config();
// console.log(process.env.Connection)
const connectToMongo = async()=>
{
    try{
        await mongoose.connect(process.env.Connection);
        console.log("Database Connected SuccesFully");

    }
    catch(e)
    {
        console.log(e.message);
    }
}
module.exports = connectToMongo;