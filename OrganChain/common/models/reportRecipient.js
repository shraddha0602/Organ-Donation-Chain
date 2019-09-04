'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(reportRecipient) {
  Composer.restrictModelMethods(reportRecipient);
};
