const express =require ('express');
const app = express();
const server=require('http').Server(app);

const bodyParser = require ('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes'); 

db('mongodb+srv://leninbautista:ci-Bf2pKajUxU&M@cluster0-dmwha.mongodb.net/test?retryWrites=true&w=majority');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

socket.connect(server);

router(app);

app.use('/app',express.static('public'));

server.listen(3000, function () {
  console.log('La aplicación está escuchando en http://localhost:3000');
});
