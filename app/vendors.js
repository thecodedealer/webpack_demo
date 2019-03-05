"use strict";

//VENDORS
require('bootstrap');
require('moment');
require('../vendor/Chart');
require('bootstrap-notify');
require('datatables.net-bs4');

module.exports = angular.module('vendors', [])
    .factory('moment', ['$window', $window => {
        const moment = require('moment/min/moment-with-locales.min');
        //momentJS config
        moment.locale('ro');
        return window.moment = moment;
    }])

    .factory('socket_io', ['$window', $window => {
        return require('socket.io-client');
    }])

    .factory('_', ['$window', $window => {
        return require('underscore');
    }])
    .factory('Promise', ['$window', $window => {
        return require('bluebird');
    }])
    .factory('SweetAlert', ['$window', $window => {
        return require('sweetalert2');
    }])
;