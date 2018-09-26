'use strict';

module.exports = angular.module('userService', [])
    .factory('userService', ['abstractService',
        (abstractService) => {

            class UserService extends abstractService{
                constructor() {
                    super();


                }


            }

            return new UserService();
        }]);