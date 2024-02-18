const createCategoryCtrl = (req, res) => {
    res.json("Creation d'une categorie");
};
const detailCategoryCtrl = (req, res) => {
    res.json("Detail d'une categorie");
};
const CategoriesCtrl = (req, res) => {
    res.json("Liste de toutes les categories");
};
const deleteCategoryCtrl = (req, res) => {
    res.json("Supprimer une categorie");
};
const editCategoryCtrl = (req, res) => {
    res.json("Editer une categorie");
};
//
module.exports = {
    createCategoryCtrl,
    detailCategoryCtrl,
    CategoriesCtrl,
    deleteCategoryCtrl,
    editCategoryCtrl
}