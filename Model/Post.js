const {Schema, default: mongoose, mongo} = require('mongoose');

const postSChema = new Schema({
    desc:
    {
        type: String,
        require: true
    },
    postPic:
    {
        type: String,
        // require: true,
    },
    user:
    {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true,
        
    },
   
})
module.exports = mongoose.model('post', postSChema);
