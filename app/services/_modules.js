'use strict';

module.exports = angular.module('services', [
    require('./abstractService').name,
    require('./appService').name,
    require('./routerServiceProvider').name,
    require('./navigationService').name,
    require('./historyService').name,
    require('./chartService').name,
    require('./dataService').name,
    require('./socketService').name
])
;