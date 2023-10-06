import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,Routes,Switch} from 'react-router-dom'
// import Home from './pages/home/home';
import Login from '../src/components/newComponnets/login';
import USerList from './components/newComponnets/USerList';
import store from './react-redux-new/store';
import Home from './pages/home.jsx'
import Dashboard from './components/newComponnets/dashboard';
import { Provider } from 'react-redux';
import {isAdmin} from './token/isAdmin'
import {isAuthenticated} from './token/isAuthenticated'
import NavBar from './components/navBar';

function App() {
  return (
    <Provider store={store}>
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route  path='/login' element={<Login/>}/>
    <Route  path='/dashboard' element={<Dashboard/>}/>
    <Route path="/user-list">
          {isAuthenticated() && isAdmin() ? <USerList /> : 'You rae not accessible this routee'}
 </Route>
   </Routes>
   </BrowserRouter>
   </Provider>
  );
}

export default App;
