const Producto = require('./Producto')
const Categoria = require('./Categoria')

Categoria.hasMany(Producto, {
    foreignKey: 'categoria_id',
})

Producto.belongsTo(Categoria, {
    foreignKey: 'categoria_id',
})

module.exports ={
    Producto,
    Categoria
}