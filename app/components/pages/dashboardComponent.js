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
                        fields: ['users'],
                        endpoint: 'getUsers',
                        autoUpdate: 30
                    });

                    dashboardService.table('test-table', {
                        title: "Test table",
                        description: "",
                        options: {},
                        fields: ['Name', 'Position', 'Office', 'Age', 'Start date', 'Salary'],
                        endpoint: 'getTestTable',
                        autoUpdate: 0
                    });

                    dashboardService.chart('test-area', {
                        type: 'area',
                        title: "Test Area Chart",
                        description: "",
                        options: {},
                        fields: ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"],
                        endpoint: 'getTestChart',
                        autoUpdate: 0
                    });

                    dashboardService.chart('test-bars', {
                        type: 'bar',
                        title: "Test Bars Chart",
                        description: "",
                        options: {},
                        fields: ["January", "February", "March", "April", "May", "June"],
                        endpoint: 'getTestBars',
                        autoUpdate: 0
                    });

                    dashboardService.chart('test-pie', {
                        type: 'pie',
                        title: "Test Pie Chart",
                        description: "",
                        options: {},
                        fields: ["Blue", "Red", "Yellow", "Green"],
                        endpoint: 'getTestPie',
                        autoUpdate: 0
                    });

                };

            }],
        template: `
            <div>
                <!--Cards section-->
                <card service="dashboardService" name="online-users"></card>
                <!--End cards section-->
                  
                <br>
                
                <!--Data table-->
                 <datatables service="dashboardService" name="test-table"></datatables>
                <!--End data table-->
                
                <br>
                
                <!-- chart area-->
                <chart service="dashboardService" name="test-area"></chart>
                <!-- chart -->
                
                <br>
                
                 <!-- chart bars-->
                <chart service="dashboardService" name="test-bars"></chart>
                <!-- chart -->
                
                <br>
                
                 <!-- chart pie-->
                <chart service="dashboardService" name="test-pie"></chart>
                <!-- chart -->
                
                <br>
                
            </div>
		`
    });