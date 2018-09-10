"use strict";
module.exports = angular.module('areaChartComponent', [])
    .component('areaChart', {
        bindings: {
            config: '<'
        },
        controller: ['$scope', '$state', 'appService',
            function ($scope, $state, appService) {
                /*
                    INJECT SERVICES
                */
                $scope.appService = appService;

                $scope.config = this.config;

                this.$onInit = () => {
                    console.log(this.config);
                };
            }],
        template: `
              <div class="card mb-3">
                <div class="card-header">
                <i class="fa fa-area-chart"></i> Users {{$ctrl.name}}
                </div>
                <div class="card-body">
                 <canvas id="{{$ctrl.config.id}}" width="100%" height="30"></canvas>
                </div>
                <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
              </div>
		`
    });