/***Importing React , React DOM, List Component***/
import React from 'react';
import ReactDOM from 'react-dom';
import ListComponent from 'ListComponent'

/***In Main Component Including Our <ListComponent apiUrl={this.props.apiUrl} onEventHandle={this.eventMethod}></ListComponent> Listing Component With onEventHandle Property
 by eventMethod***/
class Main extends React.Component {
	eventMethod(method_name){
		alert(method_name);
	}
	
	render(){
		
		return(
			<div>
				
				{this.props.children}
			</div>
		);
	}
}

export default Main;