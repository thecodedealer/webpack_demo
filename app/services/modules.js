'use strict';

require('./dataService');

module.exports = angular.module('services', [
    require('./dataService').name
])
;