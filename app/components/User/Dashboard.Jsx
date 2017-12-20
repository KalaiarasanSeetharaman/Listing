import React from 'react';
import {BrowserRouter as Router,  Route, Link} from 'react-router-dom'
import { connect } from 'react-redux';

import * as LoginAction  from 'loginAction';


/***Stamp Component***/
/*@connect((store)=>{
	return {loggingIn: store.loginReducer};
})*/

export default class Dashboard extends React.Component {

	

    render() {
        
        return (
            <div className="col-md-6 col-md-offset-3">
                asdesada
            </div>
        );
    }

}