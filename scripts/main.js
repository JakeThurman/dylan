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
			label: "You start in the word places possible on this stupid map",
		},
		{ 
			image: "images/foa.png", 
			sound: "sounds/foa.mp3",
			id: "foa",
			label: "Foa",
		},
		{ 
			image: "images/ow.png", 
			sound: "sounds/ow.mp3",
			id: "ow",
			label: "Ow",
		},
		{ 
			image: "images/what_are_you.png", 
			sound: "sounds/what_are_you.mp3",
			id: "what-are-you",
			label: "What are you?",
		},
		{ 
			image: "images/stop.png", 
			sound: "sounds/stop.mp3",
			id: "stop",
			label: "Stop",
		},
		{ 
			image: "images/already_ate.png", 
			sound: "sounds/already_ate.mp3",
			id: "already-ate",
			label: "I already ate",
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