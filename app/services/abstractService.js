'use strict';

module.exports = angular.module('abstractService', [])
    .factory('abstractService', ['$log', '$rootScope', '$window', 'moment',
        ($log, $rootScope, $window, moment) => {
            let stateGeneralLog = [];
            let stateIndividualLog = {};
            $window.state = {
                generalLog: stateGeneralLog,
                individualLog: stateIndividualLog
            };

            class AbstractService {
                constructor() {
                    /*
					 VARIABLES
					 */
                    this.$stateHook = {};
                    this.$state = {};
                    this.$form = {};
                    this.$charts = {};
                }

                state(name, value = undefined, notifyOnDuplicates = false) {
                    let oldValue = this.$state[name] !== undefined ? this.$state[name] : null;
                    if (value === undefined) {
                        return this.$state[name] !== undefined ? this.$state[name] : null;
                    } else {
                        if (notifyOnDuplicates === false && oldValue === value)
                            return;
                        let logName = this.constructor.name + '.' + name;
                        stateGeneralLog.push({
                            name: logName,
                            value: value,
                            time: moment().format('YYYY-MM-DD HH:mm:ss')
                        });
                        if (!stateIndividualLog[logName])
                            stateIndividualLog[logName] = [];
                        stateIndividualLog[logName].push({
                            value: value,
                            time: moment().format('YYYY-MM-DD HH:mm:ss')
                        });
                        this.$state[name] = value;
                        return this._notifyHooks(name, value, oldValue);
                    }
                }

                onStateChange(name, hook) {
                    try {
                        hook.$destroy = () => this.removeStateHook(name, hook);
                        hook.$ping = () => {
                            hook(this.$state[name], this.$state[name]);
                            return hook;
                        };
                        if (!this.$stateHook[name])
                            this.$stateHook[name] = [];
                        this.$stateHook[name].push(hook);
                    } catch (err) {
                        $log.error(err);
                    }
                    return hook;
                }

                removeStateHook(name, hook) {
                    let index = this.$stateHook[name].indexOf(hook);
                    this.$stateHook[name].splice(index, 1);
                }

                _notifyHooks(name, value, oldValue) {
                    let batch = [];
                    if (!!this.$stateHook[name])
                        for (let hook of this.$stateHook[name]) {
                            let options = {
                                $removeHook: () => this.removeStateHook(name, hook)
                            };
                            batch.push(hook(value, oldValue, options));
                        }
                    return Promise.all(batch)
                        .catch(err => $log.error(err));
                }

                /*
                    Charts
                */

                newChart(name) {
                    this.$charts[name] = {};
                    let ctx = document.getElementById(name);
                    this.$charts[name] = new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"],
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
                                data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
                            }],
                        },
                        options: {
                            scales: {
                                xAxes: [{
                                    time: {
                                        unit: 'date'
                                    },
                                    gridLines: {
                                        display: false
                                    },
                                    ticks: {
                                        maxTicksLimit: 7
                                    }
                                }],
                                yAxes: [{
                                    ticks: {
                                        min: 0,
                                        max: 40000,
                                        maxTicksLimit: 5
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
                    });

                }

                chart(name, details = undefined) {
                    if (details !== undefined)
                        this.$charts[name] = details;
                    else {
                        if (!this.$charts[name])
                            this.newChart(name);
                        return this.$charts[name];
                    }
                }

                clearChart(name) {
                    if (!!this.$charts[name])
                        delete this.$charts[name];
                }

            }

            return AbstractService;
        }]);