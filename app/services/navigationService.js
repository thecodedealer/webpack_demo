'use strict';

module.exports = angular.module('navigationService', [])
    .factory('navigationService', ['$log', '$location',
        ($log, $location) => {
            class Navigation {
                constructor() {

                    //Side nav tabs
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

                toggleSideNav() {
                    $("body").toggleClass("sidenav-toggled");
                    $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
                    $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
                }

            }

            return new Navigation();
        }])
;