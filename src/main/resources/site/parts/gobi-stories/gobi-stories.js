var portal = require('/lib/xp/portal');
var gobi = require('../../shared/gobi-stories/gobi-stories.js');

exports.get = function (req) {
  return gobi.render(portal.getComponent().config);
};
