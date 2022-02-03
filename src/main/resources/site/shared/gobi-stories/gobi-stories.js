var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/thymeleaf');

exports.render = (config) => {
  var viewKey = config['viewKey'];

  const response = {
    pageContributions: {
      headBegin: [
        `<script src='https://unpkg.com/@gobistories/gobi-web-integration@^6.13.1' data-cookieconsent="ignore" async onload='gobi.discover()'></script>`,
        '<link rel="stylesheet" href="' + portal.assetUrl({path: 'css/gobi-stories.css', application: app.name}) + '" type="text/css" />',
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
    color: config['color'] || "#15d6ea",
    bubbleSize: config['bubbleSize'] || "96px",
    showPlayIcon: config['showPlayIcon'] || false,
  };
  response.body = thymeleaf.render(view, model);

  return response;
};
