var fs = require('fs');
var path = require('path');

module.exports = function(dir, cb) {
  fs.readdirSync(dir).forEach(function (file) {
    /* If its the current file ignore it */
    if (file === 'index.js' || file == 'associations.js') return;

    /* Store module with its name (from filename) */
    var ret = eval(path.basename(file, '.coffee') + " = require(path.join(dir, file));");
    if(cb) {
      cb(ret);
    }
    return ret;
  });
};
