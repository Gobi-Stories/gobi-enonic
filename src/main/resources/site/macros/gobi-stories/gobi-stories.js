var gobi = require('../../shared/gobi-stories/gobi-stories.js');

exports.macro = function (context) {
  return gobi.render(context.params);
};
