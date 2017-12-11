import * as api from 'api'; 
import { connect } from 'react-redux'; 

export var sendingrequest = () => {
  return {
    type: 'SENDING_REQUEST'
  };
};

export var receviedlists = (lists) => {
  return {
    type: 'RECEVIED_LISTS',
    list:lists
  };
};

export var getlists = () => {
  return (dispatch, getState) => {
    api.getLists()
            .then(
                res => { 
                	//console.log(res.data);
                    dispatch(receviedlists(res.data));
                    //browserHistory.push('/');
                    //dispatch(alertActions.success('Registration successful'));
                },
                error => {
                   // dispatch(failure(error));
                    //dispatch(alertActions.error(error));
                }
            );

  };
};

