jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"via/test/integration/NavigationJourneyPhone",
		"via/test/integration/NotFoundJourneyPhone",
		"via/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});