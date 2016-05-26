require('coffee-script');

// load application
server = require("../app");

var chai = require("chai");
var sinonChai = require("sinon-chai");
sinon = require("sinon");
chai.use(sinonChai);
expect  = chai.expect;

// import factory builder
factory = require("factory-girl");
// setup adapter to orm
require("factory-girl-sequelize")();
// import all factories
require("./factories");

beforeEach(function(done) {
  // clean database
  sequelize.sync({force: true}).then(function(err) {
    done();
  });
});
