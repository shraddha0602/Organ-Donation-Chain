'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(recipientRegister) {
  Composer.restrictModelMethods(recipientRegister);
};
