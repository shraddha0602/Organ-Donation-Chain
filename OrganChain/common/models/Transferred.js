'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(Transferred) {
  Composer.restrictModelMethods(Transferred);
};
