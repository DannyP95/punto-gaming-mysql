const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const productosRuta = require('./routes/productosRoute');
// const multer = require('multer');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// const indexRuta = require('./routes/indexRoute');

app.set('view engine','ejs');//(Le decimos que app se va a setear con EJS, osea usar este motor de plantillas)
app.set('views', path.join(__dirname,'views')); // (Acá van a estar todas las vistas de mis páginas)

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/productos', productosRuta);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})
