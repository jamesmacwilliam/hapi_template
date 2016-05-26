url = require 'url'

_.mixin(
  capitalize: (string) ->
    string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()
)

_.mixin(
  anyCaseParam: (req, key) ->
    key ||=  ''
    params = url.parse(req.url, true).query
    params[key] || params[key.toLowerCase()] || params[key.toUpperCase()]
)

_.mixin(
  params: (req) ->
    url.parse(req.url, true).query
)

_.mixin(
  promise: ->
    {then: (cb) -> @callback = cb}
)
