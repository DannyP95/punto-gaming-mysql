const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const { sequelize } = require('./models');

const productosRouter = require('./routes/productosRoute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use('/', productosRouter);


app.listen(3000, async () =>{
    console.log("Sevidor corriendo en el pueto 3000")
    try{
        await sequelize.authenticate();
        console.log("Base de dato conectada")
    }catch(error){
        console.log("Error al conectar la DB", error)
    }
});