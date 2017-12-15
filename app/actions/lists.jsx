/**Importing API and React Redux**/
import * as api from 'api'; 
import { connect } from 'react-redux'; 

/***Action For Sending Request For loading event for ajax call***/
export var sendingrequest = () => {
  return {
    type: 'SENDING_REQUEST',
    loading:true
  };
};

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
export var getlists = (Url) => {
  return (dispatch, getState) => {
    api.getLists(Url)
            .then(
                res => { 
                    dispatch(receviedlists(res.data));
                },
                error => {
                    dispatch(failure(error));
                }
            );

  };
};

