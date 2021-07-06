const Sequelize = require('sequelize');
const sequelize = new Sequelize('sisloc', 'root', '335473', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;
