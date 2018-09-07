import { DELETE_ARTICLE, ADD_SELECT, UPDATE_RANGE } from '../constants'

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: {
      id
    }
  }
}

export function addSelect(titles) {
  return {
    type: ADD_SELECT,
    payload: {
      titles
    }
  }
}

export function updateRange(range) {
  return {
    type: UPDATE_RANGE,
    payload: {
      range
    }
  }
}
