'use strict';

module.exports = angular.module('API', [])
    .factory('API', ['$resource',
        ($resource) => {

            class ApiService{
                constructor() {
                    this.serverUrl = 'http://localhost:3000/api/';
                }
                /*
                    API METHODS
                */

                call(url, payload = {}) {
                    return $resource(this._prepareUrl(url), payload, this._prepareMethods());
                }



                /*
                    HELPERS
                */
                _prepareUrl(path) {
                    return this.serverUrl + path;
                }

                _prepareMethods() {
                    return {
                        'get':    {method: 'GET'},
                        'save':   {method: 'POST'},
                        'query':  {method: 'GET', isArray: true},
                        'update': {method: 'PUT'},
                        'delete': {method: 'DELETE'}
                    }
                }

            }

            return new ApiService();
        }]);