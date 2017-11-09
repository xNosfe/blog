const route = require('express').Router(),
    PostModel = require('../models/postModel');
//Trae todos los post
route.get('/', (req, res) => {
    PostModel.find({}, (err, docs) => {
        if (err)
            res.status(404).send(err);
        res.status(200).send(docs);
    });
});
//Trae un post por id

route.post('/', (req, res) => {
    // Revisa los campos
    if (!req.body.task || !req.body.profile || !req.body.date)
        res.status(206).send(req.body);
    // Crea un nuevo post
    let task = new PostModel({
        task: req.body.task,
        profile: req.body.profile,
        date: req.body.date
        //comment: req.body.comment
    });
    // Agrega a la base de datos
    task.save((err, data) => {
        if (err)
            res.status(404).send(err);
        res.status(200).send({
            "Estado": "Post subido"
        });
    });
});

// Actualiza
route.put('/:id', (req, res) => {
    PostModel.findById(req.params.id, (err, doc) => {
        if (err) {
            res.status(404).send(err);
        }
        if (req.body.status) doc.status = true;

        doc.save((err, doc) => {
            if (err) res.status(404).send(err);
        });
        res.status(200).send({msg: 'Post actualizado'});
    });
});

// Elimina
route.delete('/:id', (req, res) => {
    PostModel.findByIdAndRemove(req.params.id, err => {
        if (err)
            res.status(404).send(err);
        res.status(200).send({'msg':'Borrado satisfactoriamente'});
    });
});


module.exports = route;