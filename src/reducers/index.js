import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import tasksReducer from './tasks_reducer';

const rootReducer = combineReducers({
    tasksReducer,
    routing
});

export default rootReducer;
