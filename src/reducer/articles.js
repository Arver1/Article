import { articles as defaultArticles } from '../fixtures'
import { DELETE_ARTICLE } from "../constants";

export default (articlesState = defaultArticles, action) => {
  const { type } = action;

  switch(type) {
    case DELETE_ARTICLE : return articlesState.filter(article => article.id !== action.payload.id);
  }

  return articlesState
}
