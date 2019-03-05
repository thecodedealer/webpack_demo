'use strict';

module.exports = angular.module('popupService', [])
    .factory('popupService', ['abstractService', 'SweetAlert',
        (abstractService, SweetAlert) => {

            class PopupService extends abstractService {
                constructor() {
                    super();
                }

                fire() {
                    SweetAlert.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                    })
                }
            }

            return new PopupService();
        }]);