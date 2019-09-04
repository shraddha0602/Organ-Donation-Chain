'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(Recipient) {
  Composer.restrictModelMethods(Recipient);
};
