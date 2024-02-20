const {Schema, default: mongoose} = require('mongoose');
const CommunitySchema = new Schema ({
    name:
    {
        type: String,
        require: true,
        unique: true,
    },
    description: 
    {
        type: String,
        require: true,

    },
    owner:
    {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true,
        
    }
})
module.exports = mongoose.model('community', CommunitySchema);
