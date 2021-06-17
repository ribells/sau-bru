define(function () {

	/*
	* Top level export object
	*/

	return exports = {

		// --- a flight class (Example parameters: 2213, "2021-05-21", "PVD", "SFO")

		Flights: function(_data, _title, _info)
		{
			this.flights_data   = _data;  // counts up as has effect of greater radius
			this.flights_title  = _title;    // bubble radius
			this.flights_info   = _info;      // we use bubble growth to trigger font recalcs to stop font 'flickering'
			this.analysis_input = [];
			// called on every new occurence of the same key

			this.create_analysis_input = function ()
			{
				//create the analysis input, using this.flights_data;
			}
			
			this.perform_analysis = function ()
			{
				//perform the analysis pipeline, using this.analysis_input;
			}
		}
	}
});