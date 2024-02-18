const createCommentCtrl =  (req, res) => {
    res.json("Poster un commentaire");
};
const detailCommentCtrl = (req, res) => {
    res.json("Detail d'un commentaire");
};
const commentsCtrl = (req, res) => {
    res.json("Liste de tous les commentaires");
};
const deleteCommentCtrl = (req, res) => {
    res.json("Supprimer un commentaire");
};
const editCommentCtrl = (req, res) => {
    res.json("Editer un commentaire");
};
//
module.exports = {
    createCommentCtrl,
    detailCommentCtrl,
    commentsCtrl,
    deleteCommentCtrl,
    editCommentCtrl
}