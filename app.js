// Cargar los módulos
import bodyParser from 'body-parser';
import express from 'express';
// const express = require('express');

import router from './router.js'



const app = express();

const PORT = process.env.PORT || 3000

// Determinar motor de plantillas
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Indicar cual es la carpeta de los ficheros estáticos
app.use(express.static('public'))
app.use(router);



app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});

