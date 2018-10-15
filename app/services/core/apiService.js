'use strict';

module.exports = angular.module('API', [])
    .factory('API', ['$resource',
        ($resource) => {

            class ApiService{
                constructor() {
                    this.baseUrl = 'http://localhost:3000/';
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
                    return this.baseUrl + path;
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