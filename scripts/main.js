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

require([ "jquery", "helperMethods" ], function ($, helpers) {
	"use strict";
	
	var items = [
		{ 
			image: "images/no.png", 
			sound: "sounds/no.mp3",
			id: "no",
			label: "No",
		},
		{
			image: "images/stupid_map.png", 
			sound: "sounds/stupid_map.mp3",
			id: "stupid-map",
			label: "You start in the word places possible on this stupid map.",
		},
	];
	
	/* Remove Global */
	$.noConflict();
	
	/* DOM Variables */
   	var mainContainer = $("#content-container");
	
	/* Setup */	
	helpers.forEach(items, function (item) {
		var outer  = $("<div>", { "class": "item" }),
		    play   = function () { createjs.Sound.play(item.id); },
		    button = $("<button>", { id: item.id }).click(play).append($("<img>", { src: item.image })),
		    label  = $("<label>", { "for": item.id }).text(item.label);
		
		mainContainer.append(outer.append(button).append(label));
			
		createjs.Sound.registerSound(item.sound, item.id);
	});
});