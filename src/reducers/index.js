import {combineReducers} from 'redux';
import TaskReducer from './taskReducer.js';

const rootReducer = combineReducers({
	tasks: TaskReducer
})

export default rootReducer;
