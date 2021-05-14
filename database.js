const {Sequelize} = require('sequelize');


const database = new Sequelize('Node', 'sa', '123', {
 dialect: 'mssql',
    host: 'localhost',
    port: 1288, 
    dialectOptions: {
        instanceName: 'SQLEXPRESS',
        requestTimeout: 30000
    },
    pool: {
        max: 50,
        min: 0,
        idle: 10000
    }

});

database.sync()


module.exports = database