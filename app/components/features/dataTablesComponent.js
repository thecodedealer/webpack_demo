"use strict";
module.exports = angular.module('dataTablesComponent', [])

    .component('datatables', {
        bindings: {
            service: '<',
            name: '@'
        },
        controller: ['$rootScope', '$scope', '$timeout', 'appService', 'timeService', 'moment',
            function ($rootScope, $scope, $timeout, appService, timeService, moment) {

                const scope = $rootScope;

                /*
                    INJECT SERVICES
                */
                $scope.appService = appService;
                $scope.timeService = timeService;

                this.$onInit = () => {
                    const table = $scope.table = this.service.table(this.name);
                    table.updateFn();

                    setTimeout(() => {
                        $('#test2').DataTable()
                    }, 1000);


                    const updateTime = () => {
                        $scope.time = timeService.fromNow(table.updatedAt)
                        setInterval(() => {
                            $scope.$digest($scope.time = timeService.fromNow(table.updatedAt))
                        }, 1000)
                    };

                    updateTime();

                };

            }],

        template: `
             <div class="data-table-section card">
             
                <!-- Body -->
                <table id="test2" class="table table-striped table-bordered" style="width:100%">
                    <thead>
                        <tr>
                            <th ng-repeat="field in table.fields">{{field}}</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr ng-repeat="row in table.data">
                            <td ng-repeat="cell in row">{{cell}}</td>
                        </tr>
                </table>
                
                <!--Footer-->
                <footer-card component="table" type="table"></footer-card>
            </div>
          
		`
    });