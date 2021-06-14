import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import receiptReducer from './receipt-reducer';

// de este modo podremos tener varios reducers a futuro
export default combineReducers({
    auth: authReducer,
    receipt: receiptReducer
});