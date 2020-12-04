'use strict';

const plugin = {};

plugin.getPageTitle = async function (data) {
  if (data.req.route && data.req.route.path === '/popular') {
    data.templateValues.browserTitle =
      'Decentrade | Buy and sell products and commodities with crypto';
  }
  return data;
};

module.exports = plugin;
