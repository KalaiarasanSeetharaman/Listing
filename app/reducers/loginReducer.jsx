/***
Default State for this reducer will be {isLoading:false,lists: '',status: false,error: ''}
It will change when action trigger for changing the state
When state it will change the store also
List Reducer for Sending State to Store Whenever Action Trigger ***/

export var loginReducer = (state = {isLoading:false, lists: '',status: false, error: '',authenticated:false  }, action) => {
  switch (action.type) {

    case 'AUTHENTICATE_THE_USER':
      return { 
          authenticated:true 
      };
    case 'RECEVIED_LISTS':
      return { 
          ...state,
          lists: action.list,
          status: true,
          isLoading:action.fetching 
     };
     case 'SENDING_REQUEST_FAILED':
      return { 
          ...state,
          lists: '',
          status: true,
          error:action.errorMessage,
          isLoading:action.fetching 
     };
    default:
      return state;
  };
};




