"use strict";
module.exports = angular.module('dashboardComponent', [])
    .component('dashboard', {
        controller: ['$scope', 'appService', 'dashboardService', 'component', '_',
            function ($scope, appService, dashboardService, component, _) {

                /*
                    INJECT SERVICES
                */
                $scope.appService = appService;
                $scope.dashboardService = dashboardService;

                this.$onInit = () => {
                    // dashboardService.initPageConfiguration();
                    component.card('online-users', {
                        id: 'online-users',
                        path: 'online-users',
                        title: "Online users",
                        description: "",
                        settings: '',
                        data: [3],
                        fields: ['online users'],
                        updated: null
                    });
                    console.log(component.getAllKeys('cards'));
                };

                $scope.cardConfig = {
                    name: 'online-users'
                };

                // dashboardService.createDataTable('test');
                // $('#test').DataTable();
            }],
        template: `
            <div>
                <!--Cards section-->
                <card data="cardConfig"></card>
                <!--End cards section-->
                
                
                
                <br>
                
                <!--Data table-->
                <div class="data-table-section card">
                    <datatables></datatables>
                </div>
                <!--End data table-->
                
            </div>
		`
    });