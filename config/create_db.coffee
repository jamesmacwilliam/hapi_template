require('coffee-script/register')

config = require "./config"

require("./connection").establish(config)

pgtools = require 'pgtools'

pgtools.dropdb {
  user: config.db.user
  password: config.db.password
  port: 5432,
  host: config.db.host
}, config.db.database, (err, res) ->

  pgtools.createdb {
    user: config.db.user
    password: config.db.password
    port: 5432,
    host: config.db.host
  }, config.db.database, (err, res) ->
    if err
      console.error err
      process.exit -1
    require("../api/models")(force = true)
    console.log res
    process.exit
