const express = require('express');
const { createCommentCtrl, detailCommentCtrl, commentsCtrl, deleteCommentCtrl, editCommentCtrl } = require('../controllers/commentController');

const commentRouter = express.Router();

commentRouter.post(`/`, createCommentCtrl);
commentRouter.get(`/:id`, detailCommentCtrl);
commentRouter.get(`/`, commentsCtrl);
commentRouter.delete(`/:id`, deleteCommentCtrl);
commentRouter.put(`/:id`, editCommentCtrl);

module.exports = commentRouter;