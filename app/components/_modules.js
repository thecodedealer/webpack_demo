'use strict';

module.exports = angular.module('components', [
    /*
        Main Layout
    */
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
    require('./pages/formsSectionComponent').name,
    require('./pages/basicFooterComponent').name,
    require('./pages/testPageComponent').name,

    /*
        Elements
    */
    require('./elements/mainLoader').name,
    require('./elements/breadcrumbsComponent').name,
    require('./elements/cardComponent').name,
    require('./elements/componentLoader').name,

    /*
        Features
    */
    require('./features/areaChartComponent').name,
    require('./features/dataTablesComponent').name,
    require('./features/chartComponent').name,
    require('./features/footerCardComponent').name,
    require('./modal/elements/modalComponent').name

]);