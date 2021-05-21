import { combineReducers } from 'redux';
import authReducer from './auth-reducer';


// de este modo podremos tener varios reducers a futuro
export default combineReducers({
    auth: authReducer,
});