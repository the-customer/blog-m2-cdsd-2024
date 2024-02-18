const express = require('express');
const { createArticleCtrl, ArticlesCtrl, deleteArticleCtrl, editArticleCtrl, detailArticleCtrl } = require('../controllers/articleController');

const articleRouter = express.Router();


articleRouter.post(`/`, createArticleCtrl);
articleRouter.get(`/:id`, detailArticleCtrl);
articleRouter.get(`/`, ArticlesCtrl);
articleRouter.delete(`/:id`, deleteArticleCtrl);
articleRouter.put(`/:id`, editArticleCtrl);

module.exports = articleRouter;