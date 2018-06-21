import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import select from './Filters/Select'
import dateRange from './Filters/DateRange'

export default combineReducers({
    count: counterReducer,
    articles,
    select,
    dateRange
})