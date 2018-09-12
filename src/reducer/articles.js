import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from "../constants";

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
    case ADD_COMMENT : {
      const duplicateState = {...articlesState};
      duplicateState[action.payload.articleId].comments = [
        ...duplicateState[action.payload.articleId].comments,
        action.commentId
      ];
      return duplicateState
    }
  }

  return articlesState
}
