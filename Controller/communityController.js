const Community = require("../Model/Community");

module.exports.addCommunity = async(req, res)=>
{
    try {
        const {name, description, userID} = req.body;
        const communityCheck = await Community.findOne({name});
       
        if(communityCheck)
        {
            delete communityCheck;
            return res.json({success: false, msz: "Community Already Exist"});
        }
        const newCommunity = await Community.create({
            name: name,
            description: description,
            owner: userID
        })
        return res.json({success: true, msz: "Community Created Successfully"});

    } catch (error) {
        return res.json({success: false,msz: "Internal Server Error"});
    }
}