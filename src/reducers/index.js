import { combineReducers } from 'redux';
import Search from './reducer_search';
import Filter from './reducer_filter';
import Trend from './reducer_services';

const rootReducer = combineReducers({
    search: Search,
    filter: Filter,
    trend: Trend
})

export default rootReducer;