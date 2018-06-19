import {articles} from '../../fixtures'
import {SELECT} from '../../constants'

export default (state = [], action) => {
    const {type, payload} = action;
    switch(type) {
        case SELECT: return [...action.payload.selected]
    }
    return state
}