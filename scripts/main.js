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
	
	/* 
	 * Video to MP3 -> http://audio.online-convert.com/convert-to-mp3
	 * Crop MP3     -> https://mp3cut.net/
	 */
	
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
		{ 
			image: "images/cant_tell_me_what_to_do.png", 
			sound: "sounds/cant_tell_me_what_to_do.mp3",
			id: "cant-tell-me-what-to-do",
			label: "Can't tell me what to do, I'm sitting in the back seat. Stop.",
		},
		{ 
			image: "images/twin_turbos.png", 
			sound: "sounds/twin_turbos.mp3",
			id: "twin-turbos",
			label: "You know my mom's car's got twin turbos on it. So does my sister's. She. My Mom drives a fa",
		},
		{ 
			image: "images/sleep.png", 
			sound: "sounds/sleep.mp3",
			id: "sleep",
			label: "I'm trying to sleep man. Stop",
		},
		{ 
			image: "images/hmnono.png", 
			sound: "sounds/hmnono.mp3",
			id: "hmnono",
			label: "HMMNONO HMMNONO",
		},
	];
	
	/* Remove Global */
	$.noConflict();
	
	/* DOM Variables */
   	var mainContainer = $("#content-container");

	
	/* Functions */
	var createSoundItem = function (item) {
			return {
				id: item.id,
				src: item.sound,
			};
		},
		registered = false,
		register = function () {
			if (registered) return;
			var sounds = helpers.select(items, createSoundItem);		
			createjs.Sound.registerSounds(sounds);
			registered = true;
		};
		
	/* Setup */
	if (!createjs.Sound.initializeDefaultPlugins()) {
		alert("Soundjs failed to initialize.");
	}
	
	mainContainer.one("click", register);
	mainContainer.one("touchend", register);
	register();
	
	helpers.forEach(items, function (item) {
		var playing = false,
			endPlay = function () {
				playing = false;
			},
		    play = function () { 
				if (playing) return;
				var instance = createjs.Sound.play(item.id); 
				playing = true;
				instance.on("complete", endPlay);
			};
		
		var outer  = $("<div>", { "class": "item" }),
		    button = $("<div>", { id: item.id }).click(play).append($("<img>", { src: item.image })),
		    label  = $("<label>", { "for": item.id }).text(item.label);
		
		mainContainer.append(outer.append(button).append(label));
	});
});