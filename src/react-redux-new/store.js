import{createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import authenticationReducer from './authenticationREducer'

const store=createStore(authenticationReducer,applyMiddleware(thunk))

export default store