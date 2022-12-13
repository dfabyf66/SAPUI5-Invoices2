// @ts-nocheck
/* eslint-disable no-undef */
/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require([
        "DFFspace2/SAPUI5/test/integration/NavigationJourney"
    ], function () {
        QUnit.start();
    });
});