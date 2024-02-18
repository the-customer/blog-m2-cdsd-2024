const express = require('express');
const { createCategoryCtrl, detailCategoryCtrl, CategoriesCtrl, deleteCategoryCtrl, editCategoryCtrl } = require('../controllers/categoryController');

const categoryRouter = express.Router();

categoryRouter.post(`/`, createCategoryCtrl);
categoryRouter.get(`/:id`, detailCategoryCtrl);
categoryRouter.get(`/`, CategoriesCtrl);
categoryRouter.delete(`/:id`, deleteCategoryCtrl);
categoryRouter.put(`/:id`, editCategoryCtrl);

module.exports = categoryRouter;