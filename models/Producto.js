const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categoria = require('./Categoria')

const Producto = sequelize.define('Producto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria_id: {
        type: DataTypes.INTEGER,
        references:{
            model: 'categorias',
            key: 'id'
        }
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING
    }
},
{
    tableName: 'productos',
    timestamps: false    
}
);

Producto.belongsTo(Categoria, { 
    foreignKey: 'categoria_id'
}
);

module.exports = Producto;