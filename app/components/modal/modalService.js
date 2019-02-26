'use strict';

module.exports = angular.module('modalService', [])
    .factory('modalService', ['abstractService',
        (abstractService) => {

            class ModalService extends abstractService{
                constructor() {
                    super();

                    this.queue = [];
                }




            }

            return new ModalService();
        }]);