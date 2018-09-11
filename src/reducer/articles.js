import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, UPDATE_COMMENTS_ARTICLE } from "../constants";

const defaultArticles = normalizedArticles.reduce((acc, article) => {
  acc[article.id] = article;
  return acc;
}, {});

export default (articlesState = defaultArticles, action) => {
  const { type } = action;

  switch(type) {
    case DELETE_ARTICLE : {
      const duplicateState = {...articlesState};
      delete duplicateState[action.payload.id];
      return duplicateState
    }
    case UPDATE_COMMENTS_ARTICLE : {
      const duplicateState = {...articlesState};
      duplicateState[action.payload.id].comments = [
        ...duplicateState[action.payload.id].comments,
        action.payload.commentId
      ];
      return duplicateState
    }
  }

  return articlesState
}
