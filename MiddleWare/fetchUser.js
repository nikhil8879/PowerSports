const jwt = require('jsonwebtoken');
const fetchUser = async(req, res, next)=>
{
    const token = req.header('auth-token');
    if(!token)
    {
        res.json("Access Denied");
    }
    try{
        const data = jwt.verify(token, process.env.JWT_SECRET)
        req.user = data.user;
        // console.log(req.user);
        next();
    }
    catch(error)
    {
        console.error({success: false, msz: "Internal Server Error"});
    }
}
module.exports = fetchUser