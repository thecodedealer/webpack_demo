'use strict';

module.exports = angular.module('component', [])
    .factory('component', ['$log', 'abstractService', '$window', 'moment', "_", 'API',
        ($log, abstractService, $window, moment, _, API) => {
            const COMPONENTS_TYPE = [cards, tables, charts];

            let cards = {};
            let tables = {};
            let charts = {};

            $window.componentssss = {
                cards: cards,
                tables: tables,
                charts: charts
            };

            class ComponentsService extends abstractService {
                constructor() {
                    super();
                    /*
                        STATES
                    */
                    this.state('cards');

                    /*
                        VARIABLES
                    */
                    this.watcher = {
                        cards: {},
                        tables: {},
                        charts: {}
                    };

                    this.cards = {};
                    this.tables = {};
                    this.charts = {};
                }

                /*
                    Register component
                */
                register(type, name, settings) {
                    //check if type exists
                    if (COMPONENTS_TYPE.indexOf(type) === -1) {
                        $log.error(`Component type: ${type} not exist!`);
                        return;
                    } else if (this[type][name] !== undefined) {
                        $log.error(`Component name: ${name} already registered!`);
                        return;
                    }

                    //register component

                    //store if is an old value
                    let oldValue = this[type][name] !== undefined ? this[type][name] : null;

                    const fullName = this.constructor.name + '.' + name;

                    //log
                    if (!cards[fullName])
                        cards[fullName] = [];

                    e[fullName].push({
                        settings: settings,
                        time: moment().format()
                    });


                    this[type][name] = settings;
                }

                card(name, settings) {
                    //store if is an old value
                    let oldValue = this.cards[name] !== undefined ? this.cards[name] : null;

                    if (settings === undefined) {
                        //log
                        // $log.warn("Component CARD name: [" + name + "] is not registered!");
                        return this.cards[name] !== undefined ? this.cards[name] : null;
                    } else {
                        const fullName = this.constructor.name + '.' + name;
                        //log
                        if (!cards[fullName])
                            cards[fullName] = [];
                        cards[fullName].push({
                            settings: settings,
                            time: moment().format()
                        });
                        this.cards[name] = settings;
                        //notify the watcher
                        // return this._notifyWatcher('card', name, settings, oldValue)
                    }
                }

                tables(name, settings) {

                }

                charts(name, settings) {

                }

                /*
                    UPDATE COMPONENT DATA
                */
                fetchData(name) {
                    const component = this.card(name);
                    //call API
                    API.call(component.path).get().$promise
                        .then(response => {
                            this.card(name).data = response.data;
                            this.card(name).updatedAt = moment().format();
                        })
                        .catch(err => $log.error(err))
                        .finally(() => {
                        })
                }

                updateData(name) {
                    $log.log('Update component: ' + name);
                    const component = this.card(name);
                    //call API
                    API.call(component.path).get().$promise
                        .then(response => {
                            this.card(name).data = response.data;
                            this.card(name).updatedAt = moment().format();
                        })
                        .catch(err => $log.error(err))
                        .finally(() => {
                        })
                }

                getAllKeys(name) {
                    return _.keys(this[name]);
                }

                /*
                    HELPERS
                */
                _notifyWatcher(type, name, newValue, oldValue) {
                    let watchers = [];
                    if (this.watcher[type][name])
                        for (let watcher of this.watcher[type[name]]) {
                            let options = {
                                $removeWatcher: () => this._removeWatcher(type, name, watcher)
                            };
                            watchers.push(watcher(newValue, oldValue, options));
                        }
                    return Promise.all(watchers)
                        .catch(err => $log.error(err))
                }

                _removeWatcher(type, name, watcher) {
                    let index = this.watcher[type][name].indexOf(watcher);
                    this.watcher[type][name].splice(index, 1);
                }

            }

            return new ComponentsService();
        }]);