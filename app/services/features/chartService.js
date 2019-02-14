'use strict';

module.exports = angular.module('chartService', [])
    .factory('chartService', ['abstractService',
        (abstractService) => {
            class ChartService {
                constructor() {
                }


                getChartConfig(type, fields, data) {
                    switch (type) {
                        case 'area':
                            return this._getAreChartConfig(fields, data);
                        case 'bar':
                            return this._getBarChartConfig(fields, data);
                        case 'pie':
                            return this._getPieChartConfig(fields, data);
                    }
                }

                /*
                    HELPERS
                */
                _getAreChartConfig(fields, data) {
                    return {
                        type: 'line',
                        data: {
                            labels: fields,
                            datasets: [{
                                label: "Sessions",
                                lineTension: 0.3,
                                backgroundColor: "rgba(2,117,216,0.2)",
                                borderColor: "rgba(2,117,216,1)",
                                pointRadius: 5,
                                pointBackgroundColor: "rgba(2,117,216,1)",
                                pointBorderColor: "rgba(255,255,255,0.8)",
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "rgba(2,117,216,1)",
                                pointHitRadius: 20,
                                pointBorderWidth: 2,
                                data: data,
                            }],
                        },
                        options: {
                            scales: {
                                xAxes: [{
                                    time: {
                                        unit: 'date'
                                    },
                                    gridLines: {
                                        display: true
                                    },
                                    ticks: {
                                        maxTicksLimit: 7
                                    }
                                }],
                                yAxes: [{
                                    ticks: {
                                        min: 0,
                                        max: 40000,
                                        maxTicksLimit: 10
                                    },
                                    gridLines: {
                                        color: "rgba(0, 0, 0, .125)",
                                    }
                                }],
                            },
                            legend: {
                                display: false
                            }
                        }
                    }
                }

                _getBarChartConfig(fields, data) {
                    return {
                        type: 'bar',
                        data: {
                            labels: fields,
                            datasets: [{
                                label: "Revenue",
                                backgroundColor: "rgba(2,117,216,1)",
                                borderColor: "rgba(2,117,216,1)",
                                data: data,
                            }],
                        },
                        options: {
                            scales: {
                                xAxes: [{
                                    time: {
                                        unit: 'month'
                                    },
                                    gridLines: {
                                        display: false
                                    },
                                    ticks: {
                                        maxTicksLimit: 6
                                    }
                                }],
                                yAxes: [{
                                    ticks: {
                                        min: 0,
                                        max: 15000,
                                        maxTicksLimit: 5
                                    },
                                    gridLines: {
                                        display: true
                                    }
                                }],
                            },
                            legend: {
                                display: false
                            }
                        }
                    }
                }

                _getPieChartConfig(fields, data) {
                    return {
                        type: 'pie',
                        data: {
                            labels: fields,
                            datasets: [{
                                data: data,
                                backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
                            }],
                        },
                    }
                }

            }

            return new ChartService();
        }]);