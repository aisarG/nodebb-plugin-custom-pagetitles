'use strict';

/* globals document, $ */

$(document).ready(function () {
  $(window).on('action:ajaxify.updateTitle', function (event, data) {
    if (location.pathname === config.relative_path + '/') {
      data.title =
        'Decentrade | Buy and sell products and commodities with crypto';
    }
  });
});
