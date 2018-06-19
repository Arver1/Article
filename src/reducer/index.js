import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import select from './Filters/Select'

export default combineReducers({
    count: counterReducer,
    articles,
    select
})