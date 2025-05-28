const express = require('express')
const multer = require('multer');
const productosController = require('../controllers/productosController');

const router = express.Router()

// MULTER 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

router.get('/', (req, res) =>{
    res.render('index')
});

router.get('/productos', productosController.lista);

router.get('/productos/crear', productosController.crear);
router.post('/productos/crear', upload.single('imagen'), productosController.nuevo);

router.get('/productos/editar/:id', productosController.editar);
router.put('/productos/editar/:id', upload.single('imagen'), productosController.actualizar);

router.get('/productos/eliminar/:id',productosController.eliminar )
router.delete('/productos/eliminar/:id', productosController.eliminarView);

module.exports = router;