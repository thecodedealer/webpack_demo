"use strict";
module.exports = angular.module('cardComponent', [])
    .component('card', {
        bindings: {
            data: '<'
        },
        controller: ['$scope', '$state', 'appService', 'dashboardService', 'component', 'moment', 'utilService',
            function ($scope, $state, appService, dashboardService, component, moment, utilService) {

                /*
                    INJECT SERVICES
                */
                $scope.appService = appService;
                $scope.dashboardService = dashboardService;
                $scope.utilService = utilService;
                $scope.component = component;
                $scope.moment = moment;


                this.$onInit = () => {
                    $scope.config = component.card(this.data.name);
                    component.fetchData(this.data.name);
                    let updatedAt = $scope.updatedAt;
                    setInterval(() => {
                        updatedAt = utilService.pingTimeFrom(component.card(this.data.name).updatedAt);

                    }, 1000)
                };

            }],
        template: `
              <div class="card text-white bg-primary o-hidden h-100">
                <!--Header-->
                <div class="card-header">
                    {{config.title}}
                </div>
                <!--Body-->
                <div class="card-body">
                    <div></div>
                    <div class="card-body-icon">
                        <i class="fa fa-fw {{config.cardIcon}}"></i>
                    </div>
                    <div class="mr-5">{{config.data[0]}} {{config.fields[0]}}</div>
                </div>
                <!--Footer-->
                <div class="card-footer text-white clearfix small z-1">
                    <span class="float-left">
                        Actualizat cu {{updatedAt}}
                    </span>
                    <span class="float-right" ng-click="component.updateData(config.id)">
                        <i class="fa fa-refresh" aria-hidden="true"> Refresh</i>
                    </span>
                </div>
              </div>
             
		`
    });