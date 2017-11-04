
const mongooose = require('mongoose'),
    Schema = mongooose.Schema,
    collectionName = 'Task';

//Definicion del esquema de task
var PostSchema = new Schema({
    task: String,
    profile: String,
    date: {
        type: Date,
        default: Date.now
    },
    status: Boolean, default:false
});

let PostModel = mongooose.model(collectionName, PostSchema);

module.exports = PostModel;