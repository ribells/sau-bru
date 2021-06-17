define(function () {

	/*
	* Top level export object
	*/

	return exports = {

		// --- a flight class (Example parameters: 2213, "2021-05-21", "PVD", "SFO")

		Flight: function(_number, _date, _source, _target)
		{
			this.flight_num  = _number;  // counts up as has effect of greater radius
			this.flight_date = _date;    // bubble radius
			this.embark_port = _source;      // we use bubble growth to trigger font recalcs to stop font 'flickering'
			this.destination = _target;      // the preferred font size to fit the circle
			this.current_latitude = -1;
			this.current_longitude = -1;
			this.current_altitude = 0;

			// called on every new occurence of the same key

			this.estimate_flight_time = function ()
			{
				//estimate flight time here;
			}
			
			this.update_flight_location = function (lat, lon, alt)
			{
				this.current_latitude = lat;
				this.current_longitude = lon;
				this.current_altitude = alt;
			}
		}
	}
});
