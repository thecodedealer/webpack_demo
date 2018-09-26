"use strict";
module.exports = angular.module('cardComponent', [])
    .component('card', {
        bindings: {
            config: '<'
        },
        controller: ['$scope', '$state', 'appService', 'dashboardService',
            function ($scope, $state, appService, dashboardService) {

                /*
                * INJECT SERVICES
                * */
                $scope.appService = appService;
                $scope.dashboardService = dashboardService;


                this.$onInit = () => {

                };
            }],
        template: /*html*/ `
              <div class="card text-white {{$ctrl.config.cardColor}} o-hidden h-100">
                <div class="card-body">
                    <div>{{dashboardService.state('config')[$ctrl.config.action]}} {{$ctrl.config.description}}</div>
                    <div class="card-body-icon">
                        <i class="fa fa-fw {{$ctrl.config.cardIcon}}"></i>
                    </div>
                    <div class="mr-5">{{$ctrl.config.cardName}}</div>
                </div>
                <a class="card-footer text-white clearfix small z-1" href="#">
                    <span class="float-left" ng-click="dashboardService.updateCard($ctrl.config.action)">
                        <i class="fa fa-refresh" aria-hidden="true"></i>
                    </span>
                    <span class="float-left" style="margin-left: 10px">View Details</span>
                    <span class="float-right">
                <i class="fa fa-angle-right"></i>
              </span>
                </a>
            </div>
             
		`
    });