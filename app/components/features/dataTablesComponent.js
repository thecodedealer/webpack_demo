"use strict";
module.exports = angular.module('dataTablesComponent', [])

    .component('datatables', {
        bindings: {
            name: '@'
        },
        controller: ['$scope', '$timeout', 'appService', 'dashboardService',
            function ($scope, $timeout, appService, dashboardService) {

                /*
                    INJECT SERVICES
                */
                $scope.appService = appService;


                this.$onInit = () => {
                    const table = $scope.table = dashboardService.table(this.name);
                    table.updateFn()
                    setTimeout(() => {
                        $('#test2').DataTable()
                    }, 1000);
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
                <div class="card-footer text-black clearfix small z-1">
                    <span class="float-left">
                        Actualizat cu {{table.updatedAt}}
                    </span>
                    <span class="float-right" ng-click="table.updateFn()">
                        <i class="fa fa-refresh" aria-hidden="true"> Refresh</i>
                    </span>
                </div>
            </div>
          
		`
    });