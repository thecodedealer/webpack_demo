'use strict';

module.exports = angular.module('navigationService', [])
    .factory('navigationService', ['$log', '$location', 'abstractService',
        ($log, $location, abstractService) => {
            class Navigation extends abstractService{
                constructor() {
                    super();

                    /*
                        States
                    */
                    this.state('breadcrumbs', []);

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



                /*
                    BREADCRUMBS
                */
                updateBreadcrumbs() {
                    this.state('breadcrumbs', this._createPathArray());
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