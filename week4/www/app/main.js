define(function (require) {
    // Load any app-specific modules with a relative require call like:
	var sketch = require('flight_vis.js');

    // Load library/vendor modules using full IDs:
    var print = require('print');
    var p5 = require('p5.min');
    var flight = require('flight');
    var flights = require('flights');
    
	data  = "flights.json";
	title = "flights for May 22, 2021";
	info  = "https://airtraffic.com/r/itinerary/";

	var inputs = new flights.Flights (data, title, info);
	
	print("Application is loaded");
});
