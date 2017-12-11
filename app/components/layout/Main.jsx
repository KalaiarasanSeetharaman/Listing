import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'Home'
class Main extends React.Component {
	handlemessage(method_name){
		alert(method_name);
	}
	
	render(){
		return(
			<div>
				<Home onEventHandle={this.handlemessage}></Home>
			</div>
		);
	}
}

export default Main;