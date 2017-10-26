// DEPENDENCIES
const express = require('express'),
bodyParser = require('body-parser'),
PORT = 8000;
// APP
let app = express();

// ROUTES
let postRoutes = require('./routes/postRoutes');

// Require mongoose db
let db = require('./config/db');

// Routes config
app.use('/post', postRoutes);

app.get('/', (req, res) => {
res.send('Bienvenido');
});

// APP imports
app.use(bodyParser.urlencoded({
extended: true
}));
app.use(bodyParser.json());

// RUN APP
app.listen(PORT, (err, res) => {
if (err) {
    console.log(err);
    return;
}
console.log(`Server running http://localhost:${PORT}`);
});