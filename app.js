app_name = "hapi_template"

hapi = require('hapi');
require('coffee-script/register');

_ = require("underscore");
require("./config/underscore_mixins");

var http = new hapi.Server();
http.connection({port: 8080});

var config = require("./config/config");

require("./config/connection").establish(config);

require("./api/models")();
require("./api/controllers");
var routes = require('./config/routes');

var sessionOptions = {
  storeBlank: false,
  cookieOptions: {
    password: config.session.password,
    isSecure: true
  }
};

http.register({
  register: require('yar'),
  options: sessionOptions
}, function() {});

http.route(routes);

http.start(function() {
  http.log('info', 'Server running at: ' + http.info.uri);
});

server = http;

module.exports = http;
