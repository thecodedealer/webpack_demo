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
                    this.forms = {};
                    this.charts = {};
                }

                /*
                    STATE MANAGEMENT
                */
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

                updateState(name, update) {
                    this.state(name, Object.assign(this.state(name), update));
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
                    FORM MANAGEMENT
                */
                createForm(name) {
                    if (name) {
                        this.forms[name] = {};
                        $log.log('Created new form: ' + name)
                    } else
                        $log.warn('Form name is not defined!')
                }

                form(name) {
                    if (this.forms[name])
                        return this.forms[name];
                    else
                        this.createForm(name);
                }

                deleteForm(name) {
                    if (this.forms[name]) {
                        delete this.forms[name];
                    } else
                        $log.warn('Form ' + name + ' not found!');
                }


            }

            return AbstractService;
        }]);