'use strict';

module.exports = angular.module('routerServiceProvider', [])
    .provider('routerService', ['$stateProvider', '$urlRouterProvider', '$locationProvider',
        ($stateProvider, $urlRouterProvider, $locationProvider) => {
            return {
                $get: {},
                initRoutes: () => {
                    $stateProvider

                        .state('index', {
                            url: '/',
                            views: {
                                'main-layout': {
                                    template: '<main-layout></main-layout>'
                                }
                            }
                        })

                        .state('dashboard', {
                            url: '/dashboard',
                            views: {
                                'content': {
                                    template: '<dashboard></dashboard>'
                                }
                            }
                        })

                        .state('users', {
                            url: '/users',
                            views: {
                                'content': {
                                    template: '<user-section></user-section>'
                                }
                            }
                        })

                        .state('users.all', {
                            url: '/all',
                            views: {
                                'content': {
                                    template: '<test-page></test-page>'
                                }
                            }
                        })

                        .state('logs', {
                            url: '/logs',
                            views: {
                                'content': {
                                    template: '<log-section></log-section>'
                                }
                            }
                        })

                        .state('settings', {
                            url: '/settings',
                            views: {
                                'content': {
                                    template: '<settings-section></settings-section>'
                                }
                            }
                        })

                        .state('tickets', {
                            url: '/tickets',
                            views: {
                                'content': {
                                    template: '<ticket-section></ticket-section>'
                                }
                            }
                        })

                        .state('archive', {
                            url: '/archive',
                            views: {
                                'content': {
                                    template: '<archive-section></archive-section>'
                                }
                            }
                        })

                        .state('forms', {
                            url: '/forms',
                            views: {
                                'content': {
                                    template: '<forms-section></forms-section>'
                                }
                            }
                        })
                    ;
                    $urlRouterProvider.otherwise('/dashboard');
                }

            }
        }

    ])
;