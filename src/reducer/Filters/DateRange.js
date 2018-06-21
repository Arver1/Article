import {DateUtils} from 'react-day-picker'

export default (state = {from: null, to: null}, action) => {
    const {type, payload} = action
    switch(type) {
        case 'RANGE' : return DateUtils.addDayToRange(payload.day, state)
    }
    return state
}