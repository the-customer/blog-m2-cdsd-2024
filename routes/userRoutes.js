const express = require('express');
const { registerUserCtrl, loginUserCtrl, profileUserCtrl, usersCtrl, deleteUserCtrl, editUserCtrl, followUserCtrl } = require('../controllers/userController');
const isLogin = require('../middlewares/isLogin');

const userRouter = express.Router();

userRouter.post(`/register`, registerUserCtrl);

userRouter.post(`/login`, loginUserCtrl);
userRouter.get(`/profile`,isLogin, profileUserCtrl);
userRouter.get(`/`, usersCtrl);
userRouter.delete(`/:id`, deleteUserCtrl);
userRouter.put(`/:id`,editUserCtrl);
//
userRouter.get(`/follow/:id`,isLogin,followUserCtrl);

module.exports = userRouter;