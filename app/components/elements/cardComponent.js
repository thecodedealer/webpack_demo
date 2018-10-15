"use strict";
module.exports = angular.module('cardComponent', [])
    .component('card', {
        bindings: {
            data: '<'
        },
        controller: ['$scope', '$state', 'appService', 'dashboardService', 'component',
            function ($scope, $state, appService, dashboardService, component) {

                /*
                    INJECT SERVICES
                */
                $scope.appService = appService;
                $scope.dashboardService = dashboardService;
                $scope.component = component;


                this.$onInit = () => {
                    $scope.config = component.card(this.data.name);
                };
            }],
        template: `
              <div class="card text-white bg-primary o-hidden h-100">
                <component-loader></component-loader>
                <!--Header-->
                <div class="card-header">
                    {{config.title}}
                </div>
                <!--Body-->
                <div class="card-body">
                    <div></div>
                    <div class="card-body-icon">
                        <i class="fa fa-fw {{$ctrl.config.cardIcon}}"></i>
                    </div>
                    <div class="mr-5">{{config.cardName}}</div>
                </div>
                <!--Footer-->
                <div class="card-footer text-white clearfix small z-1">
                    <span class="float-left" ng-click="component.updateData(config.id)">
                        <i class="fa fa-refresh" aria-hidden="true"> Refresh</i>
                    </span>
                    <span class="float-left" style="margin-left: 10px"></span>
                    <span class="float-right">
                <i class="fa fa-angle-right"></i>
              </span>
                </div>
            </div>
             
		`
    });