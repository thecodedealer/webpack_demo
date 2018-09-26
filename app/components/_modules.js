'use strict';

module.exports = angular.module('components', [
    require('./mainLayoutComponent').name,

    /*
        Pages
    */
    require('./pages/dashboardComponent').name,
    require('./pages/userSectionComponent').name,
    require('./pages/logSectionComponent').name,
    require('./pages/settingsSectionComponent').name,
    require('./pages/ticketsSectionComponent').name,
    require('./pages/archiveSectionComponent').name,

    /*
        Elements
    */
    require('./elements/mainLoader').name,
    require('./elements/breadcrumbsComponent').name,
    require('./elements/cardComponent').name,
    /*
        Charts
    */
    require('./charts/areaChartComponent').name

])
;