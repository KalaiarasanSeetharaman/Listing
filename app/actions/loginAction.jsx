/**Importing API and React Redux**/
import * as api from 'loginAPI'; 
import { connect } from 'react-redux'; 

/***Action For Sending Request For loading event for ajax call***/
export var AUTHENTICATE_THE_USER = 'AUTHENTICATE_THE_USER';

/***
 Action For Getting List from getlists via Api call and
 Send to reducer for store changes
 ***/
export var receviedlists = (lists) => {
  return {
    type: 'RECEVIED_LISTS',
    list:lists,
    errorMessage:'',
    loading:false
  };
};

/***
 Action for failure when api call fails
 ***/
export var failure = (error) => {
  return {
    type: 'SENDING_REQUEST_FAILED',
    list:'',
    errorMessage:error,
    loading:false
  };
};

/***
 Action for api calls
 ***/
export var login = (username, password) => {
  return (dispatch, getState) => {
    api.userLogin(username, password)
            .then(
                res => { 
                    console.log(res.data.email)
                    //dispatch(receviedlists(res.data));
                    localStorage.setItem('token', res.data.email);
                },
                error => {
                    //dispatch(failure(error));
                }
            );

  };
};

