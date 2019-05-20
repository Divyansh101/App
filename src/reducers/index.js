import { combineReducers } from 'redux';
import homepageReducer from './homepageReducer';
import detailsPageReducer from './detailsPageReducer';

export default combineReducers({
    Homepage: homepageReducer,
    Details: detailsPageReducer
});