const mongooose = require('mongoose'),
Schema = mongooose.Schema,
collectionName = 'post';

//Definicion del esquema de post
var PostSchema = new Schema({
user: String,
post: String,
date: { type: Date, default: Date.now },
coment:{}  
});

let PostModel = mongooose.model(collectionName, PostSchema);

module.exports = PostModel;