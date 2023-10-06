import axios from 'axios'

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest=()=>({
    type:LOGIN_REQUEST
})

export const loginSuccess=(user,isAdmin)=>({
    type:LOGIN_SUCCESS,
    payload:{user,isAdmin}
})

export const loginFailure=(error)=>({
    type:LOGIN_FAILURE,
    payload:error
})


export const loginUser=(username,password)=>async(dispatch)=>{
    dispatch(loginRequest())
    try {
        const response=await axios.post('http://localhost:9090/api/v1/auth/login',{username,password});

        const user=response.data.details;
        const isAdmin=user.isAdmin

        dispatch(loginSuccess(user,isAdmin))
    } catch (error) {
        dispatch(loginFailure(error.response.data.error));

    }
}