
import{LOGIN_REQUEST,LOGIN_FAILURE,LOGIN_SUCCESS} from'./authAction.js'


const initialState = {
    user: null,
    isAdmin: false,
    isLoading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          user: action.payload.user,
          isAdmin: action.payload.isAdmin,
          isLoading: false,
          error: null,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          user: null,
          isAdmin: false,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer