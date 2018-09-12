import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES } from "../constants";

export default (articlesState = {}, action) => {
  const { type, response } = action;
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
    case LOAD_ALL_ARTICLES: {
      console.log(action);
      debugger;
      return response.reduce((acc, article) => {
        acc[article.id] = article;
        return acc;
      }, {});
    }
  }

  return articlesState
}
