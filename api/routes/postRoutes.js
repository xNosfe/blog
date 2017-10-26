const route = require('express').Router(),
PostModel = require('../models/postModel');

route.get('/', (req, res) => {
PostModel.find({}, (err, docs) => {
    if (err)
        res.status(404).send(err);
    res.status(200).send(docs);
});
});
route.get('/:id', (req, res) => {
PostModel.findById(req.params.id, (err, doc) => {
    if (err)
        res.status(404).send(err);
    res.status(200).send(doc);
});
});

route.post('/', (req, res) => {
// Revisa los campos
if(!req.body.user || !req.body.post || !req.body.date||!req.body.coment)
    res.status(206).send(err);
// Crea un nuevo post
let post = new postModel({
    user: req.body.user,
    post: req.body.post,
    date: req.body.date,
    coment: req.body.coment
});
// Insert post into the database
Post.save((err, data) => {
    if (err)
        res.status(404).send(err);
    res.status(200).send('Post registrado correctamente');
});
});
// #endregion
// #region PUT ------------------------------------------------------------------------------------
route.put('/:id', (req, res) => {
PostModel.findById(req.params.id, (err, doc) => {
    if (err) {
        res.status(404).send(err);
    }
    if(req.body.post)   doc.post   = req.body.post;
    if(req.body.user)   doc.user   = req.body.user;
    if(req.body.date)   doc.date   = req.body.date;
    if(req.body.coment) doc.coment = req.body.coment;

    doc.save((err, doc) => { if(err) res.status(404).send(err); });
    res.status(200).send('Post actualizado');
});
});
// #endregion
// #region DELETE ---------------------------------------------------------------------------------
route.delete('/:id', (req, res) => {
PostModel.findByIdAndRemove(req.params.id, err => {
    if (err)
        res.status(404).send(err);
    res.status(200).send('Borrado satisfactoriamente');
});
});
// #endregion

module.exports = route;