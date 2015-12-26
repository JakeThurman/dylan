requirejs.config({
	baseUrl: "scripts",
	paths: {
		/* Libraries */
		"domReady":        "lib/domReady",
		"jquery":          "lib/jquery",
		"jquery-ui":       "lib/jquery-ui",
		"Chart":           "lib/Chart",
		"moment":          "lib/moment",

		/* Core */
		"helperMethods":   "core/helperMethods",
		"stringReplacer":  "core/stringReplacer",
		"async":           "core/async",
		"ChangeLogger":    "core/changeLogger",
		"Storage":         "core/storage",
		"colorEffects":    "core/colorEffects",
		"_Popup":          "core/Popup",
		"_OptionMenu":     "core/OptionMenu",

		/* Data */
		"changeTypes":     "data/changeInfo",
		"batchTypes":      "data/changeInfo",
		"objectTypes":     "data/changeInfo",
	},
	config: {
		moment: {
			noGlobal: true
        }
	}
});

require([ "jquery" ], function ($) {
	"use strict";
	
	/* Remove Global */
	$.noConflict();
	
	/* DOM Variables */
   	var mainContentContainer = $("#content-container"),
   	    pageMenuButton       = $("#page-main-menu");
		
	// 
});