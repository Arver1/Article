import { DELETE_ARTICLE, ADD_SELECT, UPDATE_RANGE, ADD_COMMENT, LOAD_ALL_ARTICLES } from '../constants'

export function deleteArticle(id, title) {
  return {
    type: DELETE_ARTICLE,
    payload: {
      id,
      title
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

export function addComment(user, text, id) {
  return {
    type: ADD_COMMENT,
    payload: {
      articleId: id,
      user,
      text
    }
  }
}

export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    callAPI: 'http://localhost:3001/api/article'
  }
}

