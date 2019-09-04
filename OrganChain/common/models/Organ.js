'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(Organ) {
  Composer.restrictModelMethods(Organ);
};
