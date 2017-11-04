const mongoose = require('mongoose'),
    host = 'localhost',
    port = '20017',
    db_name = 'itexico';

mongoose.Promise = global.Promise; // Remove warning on update method

mongoose.connect(`mongodb://${host}/${db_name}`, {
    useMongoClient: true
}); // Remove warning on connection
let db = mongoose.connection;

db.on('error', err => console.log(err)); //console.error.bind(console, 'connection error:')
db.once('open', () => console.log('Connected to MongoDB succesfully!'));

module.exports = db;