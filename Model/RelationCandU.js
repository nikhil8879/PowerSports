const {Schema, default: mongoose}  = require('mongoose');
const RelationSchema = new Schema({
    CommunityName: 
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'community',
        require: true,
    },
    UserId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true
    },
    

})
module.exports = mongoose.model('relation', RelationSchema);