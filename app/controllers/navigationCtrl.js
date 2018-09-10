'use strict';

module.exports = angular.module('NavigationCtrl', [])
    .controller('NavigationCtrl', ['$scope', 'navigationService',
        ($scope, navigationService) => {

            /*
            * INJECT SERVICES
            * */
            $scope.navigationService = navigationService;

            $scope.message = "navigation";

            $scope.toggleSideNav = () => {
                $("body").toggleClass("sidenav-toggled");
                $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
                $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
            }

        }])
;