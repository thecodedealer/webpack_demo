"use strict";
module.exports = angular.module('footerCardComponent', [])

    .component('footerCard', {
        bindings: {
            component: '<',
            type: '@'
        },
        controller: ['$scope', '$timeout', 'appService', 'timeService', 'moment',
            function ($scope, $timeout, appService, timeService, moment) {

                /*
                    INJECT SERVICES
                */
                $scope.appService = appService;
                $scope.timeService = timeService;

                this.$onInit = () => {
                    const table = $scope.table = this.component;

                    const updateTime = () => {
                        $scope.time = timeService.fromNow(table.updatedAt);
                        setInterval(() => {
                            $scope.$digest($scope.time = timeService.fromNow(table.updatedAt))
                        }, 1000)
                    };

                    updateTime();
                };

            }],

        template: `
       
            <!--Footer-->
            <div class="card-footer {{$ctrl.type !== 'card' ? 'text-muted' : 'white-muted'}} clearfix small z-1">
                <span class="float-left">
                    Actualizat cu {{time}}
                </span>
                <span class="float-right pointed" ng-click="table.updateFn()">
                    <i class="fa fa-refresh" aria-hidden="true"> Refresh</i>
                </span>
            </div>
          
		`
    });