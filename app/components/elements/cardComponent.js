"use strict";
module.exports = angular.module('cardComponent', [])
    .component('card', {
        bindings: {
            service: '<',
            name: '@'
        },
        controller: ['$scope', '$state', 'appService', 'moment', 'utilService',
            function ($scope, $state, appService, moment, utilService) {

                /*
                    INJECT SERVICES
                */
                $scope.appService = appService;
                $scope.moment = moment;

                this.$onInit = () => {
                    const card = $scope.card = this.service.card(this.name);
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
                <div class="card-footer clearfix small z-1">
                    <span class="float-left">
                        Actualizat cu {{card.updatedAt}}
                    </span>
                    <span class="float-right pointed" ng-click="card.updateFn()">
                        <i class="fa fa-refresh" aria-hidden="true"> Refresh</i>
                    </span>
                </div>
              </div>
             
		`
    });