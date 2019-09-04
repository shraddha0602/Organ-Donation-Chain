'use strict';

const Composer = require('../lib/composer.js');

module.exports = function(recipientReportPrepared) {
  Composer.restrictModelMethods(recipientReportPrepared);
};
