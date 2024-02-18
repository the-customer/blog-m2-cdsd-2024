const User = require("../models/User");
const bcrypt = require('bcryptjs');
const createToken = require("../utils/createToken");

const registerUserCtrl = async (req,res,next) => {
    //Recuperer les donnees saisies
    const {lastname,firstname,email,photo,password,confrim_password} = req.body;
    try {
        //Verifier les meme mots de passe:
        if(confrim_password !== password){
            // return res.json({
            //     message: 'Les mots de ne sont pas les memes!!!'
            // });
            return next(new Error('Les mots de ne sont pas les memes!!!'))
        }
        //Verifier si l'email existe:
            //recherche un user avec cet email dans la base de donnees:
        const user_db = await User.findOne({email});
        if(user_db){
            // return res.json({
            //     message: 'L\'utilisateur existe deja!!!'
            // });
            return next(new Error('L\'utilisateur existe deja!!!'));
        }
        //Encode le mot de passe:
        const salt = await bcrypt.genSalt(10);
        const encodedPassword = await bcrypt.hash(password,salt);
        //Enregistrer le user
        const user = await User.create({
            lastname,
            firstname,
            email,
            password:encodedPassword,
            photo
        });
        res.json({
            status:'ok',
            data: user
        });
    } catch (error) {
        // res.json(error.message);
        // return next(error.message);
        return next(new Error(error.message))
    }
}
//
const loginUserCtrl = async (req, res) => {
    const {email,password} = req.body;
    try {
        const user_db = await User.findOne({email});
        if(!user_db){
            return res.json({
                message: "Login et/ou mot de passe invalide!!!"
            });
        }
        //
        const passwordOk = await bcrypt.compare(password,user_db.password);
        if(!passwordOk){
            return res.json({
                message: "Login et/ou mot de passe invalide!!!"
            });
        }
        //Generer le token:
        const generedToken = createToken(user_db._id);
        //Inserer le token dans les header
        res.json({
            status: 'ok',
            data: {
                firstname: user_db.firstname,
                lastname: user_db.lastname,
                email: user_db.email,
                role: user_db.role,
                token: generedToken
            }
        });
    } catch (error) {
        res.json(error.message);
    }
}
//
const profileUserCtrl = async (req, res) => {
    const id = req.userConnected;
    try {
        const user_db = await User.findById(id);
        if(!user_db){
            res.json({
                message: "Connectez-vous"
            })
        }
        res.json({
            status: 'ok',
            data: user_db
        })
    } catch (error) {
        res.json(error.message);
    }
}
//
const usersCtrl = (req, res) => {
    res.json("Liste de tous les users");
}
//
const deleteUserCtrl = (req, res) => {
    res.json("Supprimer un user");
}
//
const editUserCtrl =  (req, res) => {
    res.json("Editer un user");
}
//
module.exports = {
    registerUserCtrl,
    loginUserCtrl,
    profileUserCtrl,
    usersCtrl,
    deleteUserCtrl,
    editUserCtrl
}