Sequelize = require("sequelize");

module.exports = {
  establish: function (config) {
    sequelize = module.exports.connection = new Sequelize(
      config.db.database, config.db.username, config.db.password, {
      logging: (!!process.env["DB_LOGGING"] || config.db.logging),
      host: config.db.host,
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    })
  }
};
