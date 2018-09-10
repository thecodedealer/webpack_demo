'use strict';

module.exports = angular.module('controllers', [
    require('./indexCtrl').name,
    require('./dashboardCtrl').name,
    require('./navigationCtrl').name,
    require('./usersCtrl').name
])
;