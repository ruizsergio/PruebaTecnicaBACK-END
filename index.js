const express = require('express')
const morgan = require('morgan')
const {database} = require('./database')
const app = express();
const path = require("path");
var bodyParser = require('body-parser');

// importacion de rutas
const routes = require('./routes/index')

//configuraciones
app.set('port',process.env.PORT || 2000)



//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*',);
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    
    next();
});

//middelwares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static('public'));   
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



//rutas
app.use('/api/v1',routes)

//Servidor
app.listen(app.get('port'),()=>{
    console.log("Server on port 2000");
   
})

