'use strict';

module.exports = angular.module('IndexCtrl', [])
    .controller('IndexCtrl', ['$scope', 'dataService',
        ($scope, dataService) => {
            $scope.homeMsg = "Home View";
            $scope.data = dataService;

            $scope.toggleSideNav = () => {
                $("body").toggleClass("sidenav-toggled");
                $(".navbar-sidenav .nav-link-collapse").addClass("collapsed");
                $(".navbar-sidenav .sidenav-second-level, .navbar-sidenav .sidenav-third-level").removeClass("show");
            }
        }])
;