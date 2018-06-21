import {SELECT} from '../../constants'

export default (state = [], action) => {
    const {type, payload} = action;
    switch(type) {
        case SELECT: return [...payload.selected]
    }
    return state
}