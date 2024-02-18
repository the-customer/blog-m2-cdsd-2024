const createArticleCtrl = (req, res) => {
    res.json("Creation d'un article");
};
const detailArticleCtrl = (req, res) => {
    res.json("Detail de l'article");
};
const ArticlesCtrl = (req, res) => {
    res.json("Liste de tous les articles");
};
const deleteArticleCtrl = (req, res) => {
    res.json("Supprimer un article");
};
const editArticleCtrl = (req, res) => {
    res.json("Editer un article");
};
//
module.exports = {
    createArticleCtrl,
    detailArticleCtrl,
    ArticlesCtrl,
    deleteArticleCtrl,
    editArticleCtrl
}