'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(donorOrganRegister) {
  Composer.restrictModelMethods(donorOrganRegister);
};
