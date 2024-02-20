const relation = require("../Model/RelationCandU");

module.exports.AddRelation =async(req, res)=>
{
    try{
        const {communityId, userId} = req.body;
        // console.log(communityId, userId)
        const RelationCheck = await relation.find({$and: [{CommunityName: communityId}, {UserId: userId}]});

        if(RelationCheck.length !=0)
        {
            
            return res.json({success: false, msz:"Already Added in Relation"});
        }
        const newRelation = await relation.create({
            CommunityName: communityId,
            UserId: userId,
       
        });
        return res.json({success: true, msz:"Community Added Successfully"});
    }
    catch(error)
    {
        console.error({success: false , msz:"Internal Server Error"})
    }
}