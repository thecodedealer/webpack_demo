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

                    const testFn = () => {
                        console.log('Test fn')
                    };

                    // dashboardService.initPageConfiguration();
                    dashboardService.card('online-users', {
                        id: 'online-users',
                        title: "Online users",
                        description: "",
                        options: {},
                        data: null,
                        fields: ['name', 'name2', 'name3', 'name 4'],
                        api: '/',
                    });

                };

                $scope.cardConfig = {
                    name: 'online-users'
                };

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