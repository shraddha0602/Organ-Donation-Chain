'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(Donor) {
  Composer.restrictModelMethods(Donor);
};
