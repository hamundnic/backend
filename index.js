const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./database/config');

const app = express();

//Base de datos 
//cors 
app.use(cors())

dbConnection();
// Rutas 

app.get('/', (req, res) => {

    res.json({
        ok: true,
        msg: 'hola mundo'
    })

});

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});