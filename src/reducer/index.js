import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selected from './Filters/Select'
import dateRange from './Filters/DateRange'
import comments from './comments'

export default combineReducers({
    count: counterReducer,
    articles, selected, dateRange, comments
})