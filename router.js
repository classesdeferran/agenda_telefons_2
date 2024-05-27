// Cargar los módulos
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Buenos días');
});

router.get('/formulario', (req, res) => {
    
})


// Exportación con 'type': 'modules'
export default router;
// Esta no 
// module.exports = router;