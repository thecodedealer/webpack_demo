"use strict";

//VENDORS
require('bootstrap');
require('moment');
require('../vendor/Chart');
require('bootstrap-notify');
require('datatables.net-bs4');

module.exports = angular.module('vendors', [])
    .factory('moment', ['$window', $window => {
        return require('moment');
    }])

    .factory('socket_io', ['$window', $window => {
        return require('socket.io-client');
    }])

    .factory('_', ['$window', $window => {
        return require('underscore');
    }])
;