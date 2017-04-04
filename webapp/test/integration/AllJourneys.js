jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Alphabetical_list_of_products in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"via/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"via/test/integration/pages/App",
	"via/test/integration/pages/Browser",
	"via/test/integration/pages/Master",
	"via/test/integration/pages/Detail",
	"via/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "via.view."
	});

	sap.ui.require([
		"via/test/integration/MasterJourney",
		"via/test/integration/NavigationJourney",
		"via/test/integration/NotFoundJourney",
		"via/test/integration/BusyJourney",
		"via/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});