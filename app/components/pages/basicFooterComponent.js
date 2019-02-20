"use strict";
module.exports = angular.module('basicFooterComponent', [])
    .component('basicFooter', {
        controller: ['$scope', 'appService', 'ipCookie',
            function ($scope, appService, ipCookie) {

                /*
                    INJECT SERVICES
                */
                $scope.appService = appService;
                $scope.ipCookie = ipCookie;

                this.$onInit = () => {
                };

                this.$onDestroy = () => {
                };
            }],
        template: `
            <footer class="sticky-footer">
                <div class="container">
                    <div class="text-center">
                        <small>Copyright © <a target="_blank" href="https://codedealer.xyz">Code Dealer </a>2019</small>
                    </div>
                </div>
            </footer>
		`
    });