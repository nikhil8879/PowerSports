const { genSalt, hash, compare } = require("bcrypt");
const User = require("../Model/User");


const  jwt  = require("jsonwebtoken");
require('dotenv').config();
let success = true;
module.exports.Register = async(req, res)=>
{
    console.log(req.body);
    try{
    const {username, email , password, ProfilePicture} = req.body;
    console.log(username, email, password)
    const UserCheck = await User.find( { $or: [ {userName: username}, { email: email } ] } );
    if(UserCheck)
    {
        return res.json({success: false, msz: "User Already Exist with this Email id or UserName"});
    }
    const salt = await genSalt(10);
    const hashPassword = await hash(password, salt);
    const user = await User.create({
        userName: username,
        email: email,
        password: hashPassword,
        profilePicture: ProfilePicture,
    })
    const data =  {
        User:
        {
            id: user.id,
        }
    }
    delete  user.password
    const authToken = jwt.sign(data, process.env.JWT_SECRET);
    return res.json({success, msz: "User Created Successfully", user: user});
}
catch(e)
{
    console.error({success: false, msz: "internal Server Error", error: e.msz});
}



} 

module.exports.Login =async(req, res)=>
{
    try{
    const {email, password} = req.body;
    const UserCheck = await User.findOne({email});
    if(!UserCheck)
    {
        return res.json({success: false, msz: "Invalid Email Address or Password"})
    } 
    const isPassword = compare(password, UserCheck.password);
    if(!isPassword)
    {
        return res.json({success: false, msz: "Invalid Email Address or Password"})
    }
    
    const data = {
        user:
        {
            id: UserCheck.id
        }
    }
    const authToken = jwt.sign(data, process.env.JWT_SECRET);
    return res.json({success: true, authToken , User: User })
}catch(e)
{
    res.json({success: false, msz:" Internal Server Error"});
}
}