'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(hospitalRegister) {
  Composer.restrictModelMethods(hospitalRegister);
};
