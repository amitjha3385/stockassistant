import { configureStore, getDefaultMiddleware} from 'redux-starter-kit';
import logger from 'redux-logger';

import rootReducer from './reducers/index';
import initialState from './initialState';


const middleWare = [...getDefaultMiddleware(), logger];
const onloadState = {chartViewReducer: {...initialState}}

const store = configureStore({
    reducer: rootReducer,
    middleware: middleWare,
    preloadedState: onloadState
});
  
export default store;