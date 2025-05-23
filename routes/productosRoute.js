const express = require('express')
const router = express.Router()
const multer = require('multer');

const {productosController} = require('../controllers/productosController')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

// INDEX
router.get('/', productosController.mostrarProductos);

// CREAR 
router.get('/crear', productosController.nuevo);
router.post('/crear', upload.single('imagen'), productosController.crear);

// ELIMINAR 
router.get('/eliminar', productosController.eliminarView);
router.delete('/eliminar/:id', productosController.eliminar);

// EDITAR 
router.get('/:id', productosController.editar);
router.put('/:id', upload.single('imagen'), productosController.actualizar);

module.exports = router;