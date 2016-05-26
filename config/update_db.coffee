require('coffee-script/register')

config = require "./config"

require("./connection").establish(config)

require("../api/models")(force = false, sync = true)
