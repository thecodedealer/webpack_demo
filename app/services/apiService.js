'use strict';

module.exports = angular.module('API', [])
    .factory('API', ['$resource',
        ($resource) => {

            class ApiService{
                constructor() {
                    this.baseUrl = ''
                }
                /*
                    API METHODS
                */

                test(path, payload = {}) {
                    return $resource(this._prepareUrl(path, true), payload, this._prepareMethods());
                }


                /*
                    HELPERS
                */

                _prepareUrl(path, custom = false) {
                    return custom ? path : this.baseUrl + path;
                }

                _prepareMethods() {
                    return {
                        'get':    {method: 'GET'},
                        'save':   {method: 'POST'},
                        'query':  {method: 'GET', isArray: true},
                        'remove': {method: 'DELETE'},
                        'delete': {method: 'DELETE'}
                    }
                }

            }

            return new ApiService();
        }]);