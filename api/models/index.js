module.exports = function(force, sync) {
  require("../../config/file_loader")(__dirname, function(model) {
    //setup table if it is not already created
    if(sync || force) {
      return model.sync({force: force});
    }
  });

  // Assocations (must be setup after all the models have been loaded)

  require("./associations");

  //#################################################################
}
