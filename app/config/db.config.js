const config = require('./config.json')

module.exports = {
    HOST: config.host,
    USER: config.user,
    PASSWORD: config.password,
    DB: config.db,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };