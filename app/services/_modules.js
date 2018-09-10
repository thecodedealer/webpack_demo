'use strict';

module.exports = angular.module('services', [
    require('./dataService').name,
    require('./navigationService').name,
    require('./abstractService').name,
    require('./appService').name,
    require('./historyService').name,
    require('./chartService').name,
])
;