import React from 'react';
import {BrowserRouter as Router,  Route, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions  from 'actions'; // For all 

//var actions = require('actions'); // For all

@connect((store)=>{
	return {lists: store.listsReducer};
})
export default class Home extends React.Component {

		constructor() {
		    super();
		    this.handleclick = this.handleclick.bind(this);

		}	

		componentWillMount(){
			const { dispatch } = this.props;
			dispatch(actions.sendingrequest());
			dispatch(actions.getlists());
		}

    	handleclick(method_name){
    		 this.props.onEventHandle(method_name);
    	}

		render(){
			let handlevent = this.handleclick;
			const { lists  } = this.props;
			var header_coloumns;
			var list_view;
			var da;
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

