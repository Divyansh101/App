import { combineReducers } from 'redux';
import homepageReducer from './homepageReducer';

export default combineReducers({
    Homepage: homepageReducer
});