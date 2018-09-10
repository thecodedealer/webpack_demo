'use strict';

module.exports = angular.module('routerServiceProvider', [])
    .provider('routerService', ['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            this.$get = [() => {
                let provider = this;

                class RouterService {
                    constructor() {
                    }
                }

                return new RouterService();
            }];

            this.init = () => {
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
                ;

                $urlRouterProvider.otherwise('/dashboard');
            }

        }
    ])


;