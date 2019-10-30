import { combineReducers } from 'redux-starter-kit';

import chartViewReducer from './chartViewReducer'

const rootReducer = combineReducers({chartViewReducer});

export default rootReducer;