'use strict';

module.exports = angular.module('navigationService', [])
    .factory('navigationService', ['$log', '$location',
        ($log, $location) => {
            class Navigation {
                constructor() {
                    this.sideNav = {
                        'dashboard': {
                            logo: 'dashboard',
                            state: 'dashboard'
                        },
                        'users': {
                            logo: 'users',
                            state: 'users'
                        },
                        'tickets': {
                            logo: 'ticket',
                            state: 'tickets'
                        },
                        'statistics': {
                            logo: 'line-chart',
                            state: 'statistics'
                        },
                        'archive': {
                            logo: 'archive',
                            state: 'archive'
                        }
                    }

                }

                getSideNav() {
                    return this.sideNav;
                }


                getCurrentPath() {
                    return this._createPathArray();
                }

                /*
                    HELPERS
                */

                _createPathArray() {
                    let arr = $location.path().split('/');
                    arr[0] = 'home';
                    return arr;
                }

            }

            return new Navigation();
        }])
;