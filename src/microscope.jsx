var React = require('react');
var ReactDOM = require('react-dom');
var MultiSelect = require('react-selectize').MultiSelect;
var _ = require('lodash');


function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

var Microscope = React.createClass({

	getInitialState: function() {
    	return {};
  	},


	render: function() {
		 
		return(
	     <div>
	        Loading...
	     </div>
	   );
	 }
});

ReactDOM.render(<Microscope/>, document.getElementById('microscope'));