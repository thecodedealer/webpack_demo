'use strict';

module.exports = angular.module('authService', [])
    .factory('authService', ['abstractService',
        (abstractService) => {

            class AuthService {
                constructor() {

                }


                /*
                    ACTIONS
                */

                login() {

                }

                logout() {

                }

                /*
                    HELPERS
                */



            }

            return new AuthService();
        }]);