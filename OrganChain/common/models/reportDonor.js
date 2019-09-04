'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(reportDonor) {
  Composer.restrictModelMethods(reportDonor);
};
