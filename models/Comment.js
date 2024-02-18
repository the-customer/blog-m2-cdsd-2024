const mongoose = require('mongoose')
//
const commentSchema = new mongoose.Schema({
    article:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article',
        required: [true, 'Post is required!!!']
    },
    user:{
        type: Object,
        required: true
    },
    description:{
        type: String,
        required: [true, 'La description est requise!!!']
    }
},
{
    timestamps: true
}
);
//
const Comment = mongoose.model('Comment',commentSchema);
//
module.exports = Comment;
