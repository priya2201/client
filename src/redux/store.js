import{createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './authReducer'

const rootReducer=combineReducers({
    auth:authReducer

})
const enhancers = composeWithDevTools(applyMiddleware(thunk));

const store =createStore(rootReducer,enhancers)
export default store