'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(organTestedReportPrepared) {
  Composer.restrictModelMethods(organTestedReportPrepared);
};
