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
                                'main-layout': {
                                    template: '<main-layout></main-layout>'
                                },
                                'content': {
                                    template: '<dashboard></dashboard>'
                                }
                            }
                        })

                        .state('users', {
                            url: '/users',
                            views: {
                                'main-layout': {
                                    template: '<main-layout></main-layout>'
                                },
                                'content': {
                                    template: '<user-section></user-section>'
                                }
                            }
                        })
                        .state('users.all', {
                            url: '/all',
                            views: {
                                'main-layout': {
                                    template: '<main-layout></main-layout>'
                                },
                                'content': {
                                    templateUrl: './views/second.html',
                                    controller: 'UsersCtrl'
                                }
                            }
                        })

                        .state('logs', {
                            url: '/logs',
                            views: {
                                'main-layout': {
                                    template: '<main-layout></main-layout>'
                                },
                                'content': {
                                    template: '<log-section></log-section>'
                                }
                            }
                        })

                        .state('settings', {
                            url: '/settings',
                            views: {
                                'main-layout': {
                                    template: '<main-layout></main-layout>'
                                },
                                'content': {
                                    template: '<settings-section></settings-section>'
                                }
                            }
                        })

                        .state('tickets', {
                            url: '/tickets',
                            views: {
                                'main-layout': {
                                    template: '<main-layout></main-layout>'
                                },
                                'content': {
                                    template: '<ticket-section></ticket-section>'
                                }
                            }
                        })

                        .state('archive', {
                            url: '/archive',
                            views: {
                                'main-layout': {
                                    template: '<main-layout></main-layout>'
                                },
                                'content': {
                                    template: '<archive-section></archive-section>'
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