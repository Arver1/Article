import {DELETE_ARTICLE, INCREMENT, SELECT, RANGE} from "../constants";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function  deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectArticle(selected) {
    return {
        type: SELECT,
        payload: {selected}
    }
}

export function selectDayRange(day) {
    return {
        type: RANGE,
        payload: {day}
    }
}