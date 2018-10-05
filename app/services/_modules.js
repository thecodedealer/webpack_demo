'use strict';

module.exports = angular.module('services', [
    /*
        CORE SERVICES
    */
    require('./core/abstractService').name,
    require('./core/appService').name,
    require('./core/routerServiceProvider').name,
    require('./core/navigationService').name,
    require('./core/socketService').name,
    require('./core/messengerService').name,
    require('./core/authService').name,
    require('./core/apiService').name,
    require('./core/utilService').name,

    /*
        SECTIONS
    */
    require('./sections/dashboardService').name,

    /*
         FEATURES
    */
    require('./features/chartService').name,
    require('./dataService').name
])
;