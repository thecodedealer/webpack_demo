'use strict';

module.exports = angular.module('API', [])
    .factory('API', ['$resource', 'Promise',
        ($resource, Promise) => {

            class ApiService{
                constructor() {
                    this.apiUrl = 'http://localhost:5000/api/';
                }
                /*
                    API METHODS
                */

                call(url, payload = {}) {
                    return $resource(this._prepareUrl(url), payload, this._loadMethods());
                }


                /*
                    HELPERS
                */
                _prepareUrl(path) {
                    return this.apiUrl + path;
                }

                _loadMethods() {
                    return {
                        'get':    {method: 'GET'},
                        'post':   {method: 'POST'},
                        'query':  {method: 'GET', isArray: true},
                        'update': {method: 'PUT'},
                        'delete': {method: 'DELETE'}
                    }
                }

            }

            return new ApiService();
        }]);