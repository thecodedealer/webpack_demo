"use strict";
module.exports = angular.module('cardComponent', [])
    .component('card', {
        bindings: {
            data: '<'
        },
        controller: ['$scope', '$state', 'appService', 'dashboardService', 'moment', 'utilService',
            function ($scope, $state, appService, dashboardService, moment, utilService) {

                /*
                    INJECT SERVICES
                */
                $scope.appService = appService;
                $scope.dashboardService = dashboardService;
                $scope.moment = moment;


                this.$onInit = () => {
                    const card = $scope.card = dashboardService.card(this.data.name);
                    card.updateFn();
                };

            }],
        template: `
              <div class="card text-white bg-primary o-hidden h-100">
                <!--Header-->
                <div class="card-header">
                    {{card.title}}
                </div>
                <!--Body-->
                <div class="card-body">
                    <div></div>
                    <div class="card-body-icon">
                        <i class="fa fa-fw {{cardcardIcon}}"></i>
                    </div>
                    <div class="mr-5" ng-repeat="data in card.data track by $index">{{data}} {{card.fields[$index]}}</div>
                </div>
                <!--Footer-->
                <div class="card-footer text-white clearfix small z-1">
                    <span class="float-left">
                        Actualizat cu {{card.updatedAt}}
                    </span>
                    <span class="float-right" ng-click="dashboardService.card($ctrl.data.name).updateFn()">
                        <i class="fa fa-refresh" aria-hidden="true"> Refresh</i>
                    </span>
                </div>
              </div>
             
		`
    });