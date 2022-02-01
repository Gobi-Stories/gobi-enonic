var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/thymeleaf');

exports.macro = function (context) {
  var viewKey = context.params['viewKey'];

  const response = {
    pageContributions: {
      headBegin: [
        '<link rel="stylesheet" href="' + portal.assetUrl({path: 'css/gobi-stories.css', application: app.name}) + '" type="text/css" />',
      ],
      bodyEnd: [
        `<script src='https://unpkg.com/@gobistories/gobi-web-integration@^6.13.1' data-cookieconsent="ignore" onload='gobi.discover()'></script>`,
      ],
    },
  }

  if (!viewKey) {
    const placeholderUrl = portal.assetUrl({path: 'img/image-placeholder.png', application: app.name});

    response.body = `<div class="gobi-placeholder"><img src="${placeholderUrl}" alt="Gobi Story Placeholder" /></div>`;

    return response;
  }

  const view = resolve("gobi-stories.html");
  const model = {
    viewKey: viewKey,
    color: context.params['color'] || "#15d6ea",
    bubbleSize: context.params['bubbleSize'] || "96px",
    showPlayIcon: context.params['showPlayIcon'] || false,
  };
  response.body = thymeleaf.render(view, model);

  return response;
};
