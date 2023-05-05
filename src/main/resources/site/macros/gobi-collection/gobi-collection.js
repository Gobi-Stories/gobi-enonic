var gobi = require('../../shared/gobi-collection/gobi-collection.js');

exports.macro = function (context) {
  return gobi.render(context.params);
};
