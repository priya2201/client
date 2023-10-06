const initialState={
    user:null,
    isAdmin:false,
    error:null
}

const authenticationReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS':return{
            ...state,
            user:action.payload.details,
            isAdmin:action.payload.isAdmin,
            errror:null
        }
        case 'LOGIN_FAILURE':return{
            ...state,
            user:null,
            isAdmin:false,
            error:action.payload
        };
        default:return state;
    }
}
export default authenticationReducer