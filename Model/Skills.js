const {Schema, default: mongoose} = require('mongoose');
const SkillSchema = Schema({
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true,
    },
    skills : []

})