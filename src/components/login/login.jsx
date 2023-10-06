import jwtDecode from 'jwt-decode'
import React,{useState} from 'react'
import{useDispatch,useSelector} from 'react-redux'
import { loginUser } from '../../redux/authAction'

function Login() {
// const onSubmit=async()=>{
//     const formData=new FormData()
//     formData.append(username,'username')
//     formData.append(password,'password')

//     console.log(formData)
//     try {
//       const apiResult=await fetch('http://localhost:9090/api/v1/auth/login',{
//         method:'POST',
//         headers:{
//             '"Content-Type':'application/json'
//         },
//         body:JSON.stringify({
//             username:data.email,
// password:data.password
//         })
//       })  

//       const resData=await apiResult.json()
//       const decodedIsAdmin=jwtDecode(resData.token)
//       const decIsAdmin=decodedIsAdmin.isAdmin

//       console.log(resData)
//       if(resData){
//         const {details}=resData
//         console.log(details)
//       }

      
//     } catch (error) {
        
//     }
// } 
const dispatch = useDispatch();
const isLoading = useSelector((state) => state.auth.isLoading);
const error = useSelector((state) => state.auth.error);

const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(loginUser(username, password));
  };
return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
      {error && <p className="error">{error}</p>}
  
    </div>
  )
}

export default Login