// Cargar los módulos
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Buenos días');
});

router.get('/formulario', (req, res) => {
    res.send('Seré dinámico algún día...')
})

router.post('/insert', (req, res) => {
    console.log(req.body); 
    // res.send('Seré dinámico algún día...')
})


// Exportación con 'type': 'modules'
export default router;
// Esta no 
// module.exports = router;