export var listsReducer = (state = { lists: '',status: false  }, action) => {
  switch (action.type) {
    case 'SENDING_REQUEST':
      return { 
          ...state,
          status: false 
      };
    case 'RECEVIED_LISTS':
      return { 
          ...state,
          lists: action.list,
          status: true
     };
    default:
      return state;
  };
};




