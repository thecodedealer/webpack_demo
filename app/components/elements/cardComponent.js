"use strict";
module.exports = angular.module('cardComponent', [])
    .component('card', {
        bindings: {
            config: '<'
        },
        controller: ['$scope', '$state', 'appService',
            function ($scope, $state, appService) {

                /*
                * INJECT SERVICES
                * */
                $scope.appService = appService;

                /*
				 COMPONENT INITIALIZATION
				 */
                this.$onInit = () => {

                };
            }],
        template: `
              <div class="card text-white {{$ctrl.config.cardColor}} o-hidden h-100">
                <div class="card-body">
                    <div>{{$ctrl.config.description}}</div>
                    <div class="card-body-icon">
                        <i class="fa fa-fw {{$ctrl.config.cardIcon}}"></i>
                    </div>
                    <div class="mr-5">{{$ctrl.config.cardName}}</div>
                </div>
                <a class="card-footer text-white clearfix small z-1" href="#">
                    <span class="float-left">View Details</span>
                    <span class="float-right">
                <i class="fa fa-angle-right"></i>
              </span>
                </a>
            </div>
             
		`
    });