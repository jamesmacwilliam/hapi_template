def = require "./default"

_ = require("underscore")

env = require "./#{process.env["NODE_ENV"]}"

try
  local = require "./local"
catch
  local = {}

module.exports = _.chain(def).extend(env).extend(local).value()
