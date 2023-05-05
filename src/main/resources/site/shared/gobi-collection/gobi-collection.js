var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/thymeleaf');

exports.render = (config) => {
  var collectionId = config['collectionId'];

  const response = {
    pageContributions: {
      headBegin: [
        `<script src='https://unpkg.com/@gobistories/gobi-web-integration@^6.13.1' data-cookieconsent="ignore" async onload='gobi.discover()'></script>`,
        '<link rel="stylesheet" href="' +
          portal.assetUrl({
            path: 'css/gobi-stories.css',
            application: app.name,
          }) +
          '" type="text/css" />',
      ],
    },
  };

  if (!collectionId) {
    const placeholderUrl = portal.assetUrl({
      path: 'img/image-placeholder.png',
      application: app.name,
    });

    response.body = `<div class="gobi-placeholder"><img src="${placeholderUrl}" alt="Gobi Story Placeholder" /></div>`;

    return response;
  }

  const view = resolve('gobi-collection.html');
  const model = {
    collectionId: collectionId,
  };

  response.body = thymeleaf.render(view, model);

  return response;
};
