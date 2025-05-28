const {Sequelize} = require ('sequelize');
const sequelize = new Sequelize('punto_gaming', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = sequelize;