'use strict';

module.exports = angular.module('dashboardService', [])
    .factory('dashboardService', ['$log', 'abstractService', 'API', 'messengerService', 'utilService',
        ($log, abstractService, API, messengerService, utilService) => {

            class DashboardService extends abstractService {

                constructor() {
                    super();

                    this.state('pageConfig', {});

                }

                /*
                    ACTIONS
                */
                initPageConfiguration() {
                    this._loadCards();
                }


                /*
                    HELPERS
                */
                _loadCards() {
                    this.updateState('pageConfig', {
                        cards: this.CARDS
                    });

                    //Call API
                    this.getOnlineUsers();
                }


            }

            return new DashboardService();
        }]);