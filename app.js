// Cargar los módulos
import express from 'express';
// const express = require('express');

import router from './router.js'

const app = express();

const PORT = process.env.PORT || 3000

// Indicar cual es la carpeta de los ficheros estáticos
app.use(express.static('public'))
app.use(router);



app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});

