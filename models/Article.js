const mongoose = require('mongoose')

//create schema
const articleSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Le titre est requis!!!'],
        trim: true
    },
    description:{
        type: String,
        required: [true, 'La description est requise!!!']
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    nbrViews:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    dislikes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    photo:{
        type: String,
        required: true
    }
},
{
    timestamps: true
}
);
//
const Article = mongoose.model('Article',articleSchema);
//
module.exports = Article;