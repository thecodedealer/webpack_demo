"use strict";
module.exports = angular.module('dashboardComponent', [])
    .component('dashboard', {
        controller: ['$scope', 'appService', 'dashboardService', '_',
            function ($scope, appService, dashboardService, _) {

                /*
                    INJECT SERVICES
                */
                $scope.appService = appService;
                $scope.dashboardService = dashboardService;

                this.$onInit = () => {

                    dashboardService.card('online-users', {
                        title: "Online users",
                        description: "",
                        options: {},
                        fields: ['name', 'name2', 'name3', 'name 4'],
                        api: '/'
                    });

                    dashboardService.table('test-table', {
                        title: "Test table",
                        description: "",
                        options: {},
                        fields: ['Name', 'Position', 'Office', 'Age', 'Start date', 'Salary'],
                        api: '/getTestTable'
                    });

                };

            }],
        template: `
            <div>
                <!--Cards section-->
                <card name="online-users"></card>
                <!--End cards section-->
                  
                <br>
                
                <!--Data table-->
                 <datatables name="test-table"></datatables>
                <!--End data table-->
                
            </div>
		`
    });