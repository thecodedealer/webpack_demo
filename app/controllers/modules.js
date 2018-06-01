'use strict';

require('./indexCtrl');

module.exports = angular.module('controllers', [
    require('./indexCtrl').name
])
;