import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import user from './user';

export default combineReducers({
	auth,
	user,
  routing: routerReducer
});