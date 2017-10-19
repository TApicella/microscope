var React = require('react');
var ReactDOM = require('react-dom');

var PythonDemos = React.createClass({

	getInitialState: function(){
	    return {
	      	firsthalf: "",
	      	secondhalf: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
deserunt mollit anim id est laborum.`,
			text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
deserunt mollit anim id est laborum.`,
	      	curr_pos: 0,
	      	temp_pos: null,
	      	lines: "",
	      	maxlen: 445
	    }
  	},

  	setSeek: function(val){
  		this.setState({temp_pos: val});
  	},

  	runSeek: function(){
  		var val = this.state.temp_pos;
  		var fhalf = this.state.text.substring(0, val);
  		var shalf = this.state.text.substring(val);
  		this.refs.seeknum.value = null;
  		this.setState({curr_pos: val, firsthalf: fhalf, secondhalf: shalf, temp_pos: null});
  	},

  	readLines: function(log, set){
  		var result = this.state.secondhalf;
  		if(log){
  			alert(result);
  		}
  		if(set){
  			var newlines = result;
  		}
  		else{
  			var newlines = this.state.lines;
  		}
  		var full = this.state.text;
  		this.setState({lines: newlines, secondhalf: "", firsthalf:full, curr_pos:full.length});
  	},

	render: function() {

    var defaultstyle ={
      "fontSize":"24px",
      "width": "75%",
      "margin": "0 auto",
      "textAlign": "center"
    };

    var markerstyle ={
    	"color":"red",
    	"fontFamily":"Arial"
    };

    var commandstyle ={
      "fontSize":"24px",
      "width": "75%",
      "margin": "0 auto",
      "textAlign": "center",
      "fontFamily": "Courier"
    };

    return (
      <div style={defaultstyle}>
      	<div> Please note: this demo is not running Python in the browser, merely (messily) simulating some functions</div>
      	<br/>
      	<div>
      	    <div>Current position in file: {this.state.curr_pos}</div>
	        <span style={commandstyle}>seek(</span>
	        	<input type='number' value={this.state.temp_pos} min='0' max={(this.state.firsthalf+this.state.secondhalf).length-1} 
	         	onChange={(event) =>this.setSeek(event.target.value)} ref="seeknum"/>
	         <span style={commandstyle}>)</span> <button onClick={(event) => this.runSeek()}>Run</button>
	    </div>
        <div style={commandstyle}> lines = file.readLines() <button onClick={(event) =>this.readLines(false, true)}>Run</button></div>
        <br/>
		<div style={commandstyle}> print(file.readLines()) <button onClick={(event) =>this.readLines(true, false)}>Run</button></div>
        <h2>File:</h2>
        <span>{this.state.firsthalf}</span><sup style={markerstyle}>V</sup><span>{this.state.secondhalf}</span>
        <h2>Lines:</h2>
        <span>{this.state.lines}</span>
        <br/>
      </div>
    );
  }
});

ReactDOM.render(<PythonDemos/>, document.getElementById('python_demos'));