'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(Hospital) {
  Composer.restrictModelMethods(Hospital);
};
