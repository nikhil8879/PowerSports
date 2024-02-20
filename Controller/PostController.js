const Post = require("../Model/Post");
const User = require("../Model/User");


module.exports.addpost = async(req, res)=>
{
    try {
      
        const {desc, profile, user}= req.body;
       
        const checkUser = await User.findOne({_id: user});
        
        if(!checkUser)
        {
            return res.json({success: false , msz: "No Such User Exist"});
        }

        const newPost = await Post.create({
            desc: desc,
            postPic: profile,
            user: user
        })
        res.json({success: true, post: newPost})

    } catch (error) {
        res.json({success: false, msz: "Internal Server Error"});
        console.error(error)
    }
}

module.exports.getPost = async(req, res)=>
{
    try{
    const {userId} = req.body;

    const checkUser = await User.findOne({_id: userId});

    
        if(!checkUser)
        {
            return res.json({success: false , msz: "No Such User Exist"});
        }
        
        delete checkUser;
        
        const post = await Post.find({user: req.user.id });

        return res.json({success: true, post: post});
    }catch(error)
    {
        res.json({success: false, msz: "Internal Server Error"});
    }
}

module.exports.deletePost = async(req, res)=>
{
    try {
        const postId = req.params.id;
        
        const newPost = await Post.findById(postId);
      
        if(!newPost)
        {
            return res.json({success: false , msz:"Post Doesn't exist"})
        }
        console.log(newPost.user.toString());
        
        if(newPost.user.toString() !== req.user.id)
        {
            res.json({success: false , msz:"Access Denied"});
        }
        delete newPost;
        await Post.findByIdAndDelete(postId);
        res.json({success: true, msz:"Deleted SuccessFully"});
    } catch (error) {
        res.json({success: false, msz:"Internal Server Error"})
        console.error(error);
    }
}