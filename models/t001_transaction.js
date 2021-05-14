var Sequelize = require('sequelize');
var sequelize = require('../database');

var t001_transaction = sequelize.define('prueba_tecnica', {
  NU_ID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
   
  },
  VA_DESCRIPTION:Sequelize.STRING,
  FE_CREATE_ON: Sequelize.DATE,
  VA_AMOUNT: Sequelize.DECIMAL(30, 10) 
 
  
 
});

module.exports = t001_transaction