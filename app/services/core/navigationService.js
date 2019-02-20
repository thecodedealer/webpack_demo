'use strict';

module.exports = angular.module('navigationService', [])
    .factory('navigationService', ['$log', '$location', 'abstractService',
        ($log, $location, abstractService) => {
            class Navigation extends abstractService {
                constructor() {
                    super();

                    /*
                        States
                    */
                    this.state('breadcrumbs', []);

                    this.homeState = 'dashboard';

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
                        'forms': {
                            logo: 'pencil-square-o',
                            state: 'forms'
                        },
                        'tickets': {
                            logo: 'ticket',
                            state: 'tickets'
                        },
                        'logs': {
                            logo: 'bar-chart',
                            state: 'logs'
                        },
                        'archive': {
                            logo: 'archive',
                            state: 'archive'
                        },
                        'settings': {
                            logo: 'cogs',
                            state: 'settings'
                        }
                    }

                }

                /*
                    ACTIONS
                */
                getSideNav() {
                    return this.sideNav;
                }

                updateBreadcrumbs() {
                    this.state('breadcrumbs', this._createPathArray());
                }

                _createPathArray() {
                    let arr = $location.path().split('/');
                    arr[0] = 'home';

                    return arr.map(el => {
                        const obj = {};

                        obj.name = el;

                        if (this.sideNav[el])
                            obj.state = this.sideNav[el].state;
                        else if (el === 'home')
                            obj.state = this.homeState;

                        return obj;
                    });

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