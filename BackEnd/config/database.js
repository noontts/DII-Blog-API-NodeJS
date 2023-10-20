const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'blogs-database', // Database name
    'postgres', // Username
    '1234', // Password
    {
      host: 'localhost', // Connect to your local database
      dialect: 'postgres' // Tell sequelize to use Postgres
    }
  );

const connect = async() => {
    try {
        await sequelize.authenticate();
        console.log('Database authenticate success!')

    } catch (error) {
        console.log('Database authenticate fail!',error)
    }
}

const sync = async() =>{
    try{
        await sequelize.sync();
        console.log('Database sequelize success!');
    } catch(error){
        console.log('Database sequelize fail!' , error);
    }
}

module.exports = { sequelize, connect, sync };