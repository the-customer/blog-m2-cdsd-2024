// 1.importer mongoose
const mongoose = require('mongoose');
// 2.Creer le schema
const userSchema = new mongoose.Schema({
    lastname:{
        type: String,
        required: [true,'le nom est requis!']
    },
    firstname:{
        type: String,
        required: [true,'le prenom est requis!']
    },
    photo:{
        type: String,
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: [true,'Le mot de passe est requis!!']
    },
    active:{
        type: Boolean,
        default: true
    },
    isBlocked:{
        type: Boolean,
        default: false
    },
    nbrArticles:{
        type: Number,
        default: 0
    },
    role:{
        type: String,
        enum: ['Admin','User','Guest']
    },
    followers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    following:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    articles:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    }]
},
{
    timestamps:true
}
);
// 3.Compiler le modele
const User = mongoose.model('User',userSchema);
// 4. Exporter le modele
module.exports = User;