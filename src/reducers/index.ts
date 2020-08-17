import { combineReducers } from 'redux'
import publicApiReducer from './publicApiReducer';

const rootReducer = combineReducers({
    publicApiReducer,
})

export default rootReducer;
