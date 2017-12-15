/**Import Reacr , React Rouer Dom and Connect for connecting Store Stamp Component**/
import React from 'react';
import {BrowserRouter as Router,  Route, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions  from 'actions'; // Gettng all action functions by Import method syntax 

//var actions = require('actions'); // Gettng all action functions by require method syntax


/***Stamp Component***/
@connect((store)=>{
	return {lists: store.listsReducer};
})


/***Dump  Component of Listing***/
export default class ListComponent extends React.Component {

		/**In constructor we can give default props, state value**/
		constructor() {
		    super();
		    this.handleclick = this.handleclick.bind(this);

		}

		/**It will do all the action before render**/	
		componentWillMount(){
			
			const { dispatch } = this.props;
			dispatch(actions.sendingrequest());
			dispatch(actions.getlists(this.props.apiUrl));
		}

		/**Handleclick method is for sending data to main component**/	
    	handleclick(method_name){
    		 this.props.onEventHandle(method_name);
    	}

		render(){

			/**Initialize of clickevent for list**/	
			let handlevent = this.handleclick;

			/**Getting State Value From Store By Props**/	
			const { lists  } = this.props;

			/**Header Coloumns And List**/
			var header_coloumns;
			if(lists.lists!=''){
				const headers = lists.lists.header;
				const lists_data  = lists.lists.data.lists;


				if(headers.length>0){
					header_coloumns = headers.map((header) =>
					    <th key={header.toString()}>
					      {header}
					    </th>
					 );
				}
				console.log(lists_data);
				return (
					<div>
						<table className="table table-bordered">
						    <thead>
						      <tr>
						      {header_coloumns}
						      </tr>
						    </thead>
						    <tbody>
							   { 
								 lists_data.map(function(groupItem, key){ 
								  if(headers.length == Object.keys(groupItem).length){
						          return (
							         	<tr key={key}>
								           { Object.keys(groupItem).map(function(item,value){
								           	   if(item!="action"){
									            	return (
									            		<td key={value}>{groupItem[item]}</td>					            	
									            	);
								            	}else{
								            		var name_method = groupItem[item]['method_name'];
								            		console.log(name_method);
								            		return (
							            					<td key={value}>
							            						<button onClick={handlevent.bind(this,name_method)}  value={groupItem[item]['name']}>{groupItem[item]['name']}</button>
							            					</td>
							            				);
								            	}
								            })
								      		}
							            </tr>
						       	 	);
						      		}else{
						      			 return (<tr key={key}>Coloumn Does Not Match With Result Set</tr>);
						      		}
						         })
								}
						    </tbody>
						  </table>
					</div>
				);
			}else{
				return (<div>No Data Found</div>);
			}
		}

}

