const {Sequelize, DataTypes} = require('sequelize');
const db = require('./db');

//Definição do esquema dos carros:
const Car = db.define('carros', {
  id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
  },
  placa:{
      type: DataTypes.STRING(7)
  },
  chassi: {
      type: DataTypes.STRING(17)
  },
  renavam:{
      type: DataTypes.STRING(11)
  },
  modelo:{
      type: DataTypes.STRING(50)
  },
  marca:{
      type: DataTypes.STRING(50)
  },
  ano:{
      type: DataTypes.BIGINT(4)
  }
})

//Modulação para usar em qualquer arquivo
module.exports = Car;