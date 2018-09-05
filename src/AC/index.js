import { DELETE_ARTICLE, SORT_BY_SELECT_ARTICLE, DELETE_OPTION } from '../constants'

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: {
      id
    }
  }
}

export function sortBySelectArticle(selectedOption) {
  return {
    type: SORT_BY_SELECT_ARTICLE,
    payload: {
      selectedOption
    }
  }
}

export function deleteOption(title) {
  return {
    type: DELETE_OPTION,
    payload: {
      title
    }
  }
}
