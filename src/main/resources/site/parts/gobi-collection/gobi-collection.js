var portal = require('/lib/xp/portal');
var gobi = require('../../shared/gobi-collection/gobi-collection.js');

exports.get = function (req) {
  return gobi.render(portal.getComponent().config);
};
