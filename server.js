const express =require ('express');
const bodyParser = require ('body-parser');

const db = require('./db');

const router = require('./network/routes'); 

db('mongodb+srv://leninbautista:ci-Bf2pKajUxU&M@cluster0-dmwha.mongodb.net/test?retryWrites=true&w=majority');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(router);

router(app);



app.use('/app',express.static('public'));

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');
