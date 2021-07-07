const Sequelize = require('sequelize');
const sequelize = new Sequelize('sisloc', 'root', '335473', {dialect: 'mysql', host: 'localhost'});
//Conectando ao banco de dados (Alterar parâmetros dependendo da maquina utilizada)
module.exports = sequelize;
