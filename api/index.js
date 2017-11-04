// DEPENDENCIES
const express = require('express'),
bodyParser = require('body-parser'),

PORT = 8000;
// APP
let app = express();
//CORS
// ROUTES
let postRoutes = require('./routes/postRoutes');

// Require mongoose db
let db = require('./config/db');

// APP imports
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Routes config
app.use('/post', postRoutes);



app.get('/', (req, res) => {
res.send('Welcome to my todoList project main Page');
});
//RUN APP
app.listen(PORT, (err, res) => {
if (err) {
    console.log(err);
    return;
}
console.log(`Server running http://localhost:${PORT}`);
});
function perimitirCrossDomain(req, res, next) {
    //en vez de * se puede definir SÓLO los orígenes que permitimos
    res.header('Access-Control-Allow-Origin', '*');
    //metodos http permitidos para CORS
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  }
