const Sequelize =  require('sequelize');
const sequelize = require('../config/database');

const Producto = require('./Producto')
const Categoria = require('./Categoria')

Categoria.hasMany(Producto, {
    foreignKey: 'categoria_id',
})

Producto.belongsTo(Categoria, {
    foreignKey: 'categoria_id',
    as: 'Categoria'
})

module.exports ={
    sequelize,
    Producto,
    Categoria
}