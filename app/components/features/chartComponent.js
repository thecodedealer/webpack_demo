"use strict";
module.exports = angular.module('chartComponent', [])

    .component('chart', {
        bindings: {
            service: '<',
            name: '@'
        },
        controller: ['$scope', '$timeout', 'appService', 'chartService',
            function ($scope, $timeout, appService, chartService) {

                /*
                    INJECT SERVICES
                */
                $scope.appService = appService;


                this.$onInit = () => {
                    const chart = $scope.chart = this.service.chart(this.name);
                    const jID = $scope.jID = `id_chart_${chart.type}_${this.name}`;

                    chart.updateFn()
                        .then(() => {
                            const ctx = document.getElementById(jID);
                            let chartInstance = new Chart(ctx, chartService.getChartConfig(chart.type, chart.fields, chart.data));

                            /*
                               WATCH AFTER DATA CHANGES -> UPDATE CHART
                            */
                            this.service.watchComponent('charts', this.name, (value, oldVal) => {
                                chartInstance.data.datasets[0].data = value.data;
                                chartInstance.update();
                            });
                        });
                }

            }],

        template: `
              <!-- Area Chart Example-->
              <div class="card ">
                <div class="card-header">
                  <i class="fa fa-{{chart.type}}-chart"></i> {{chart.title}}</div>
                  
                <!-- Body -->  
                <div class="card-body">
                
                  <!-- Area chart -->
                  <canvas ng-if="chart.type === 'area'" id="{{jID}}" width="100%" height="30"></canvas>
                  <!-- Bars chart -->
                  <canvas ng-if="chart.type === 'bar'" id="{{jID}}" width="100" height="30"></canvas>
                  <!-- Pie chart -->
                  <canvas ng-if="chart.type === 'pie'" id="{{jID}}" width="100" height="50"></canvas>
                  
                </div>
                
                <!--Footer-->
                <div class="card-footer text-muted clearfix small z-1">
                    <span class="float-left">
                        Actualizat cu {{chart.updatedAt}}
                    </span>
                    <span class="float-right pointed" ng-click="chart.updateFn()">
                        <i class="fa fa-refresh" aria-hidden="true"> Refresh</i>
                    </span>
                </div>
              </div>

		`
    });