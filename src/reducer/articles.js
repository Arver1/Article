import { articles as defaultArticles } from '../fixtures'
import { DELETE_ARTICLE, SORT_BY_SELECT_ARTICLE } from "../constants";

let articles = defaultArticles.slice();
export default (articlesState = defaultArticles, action) => {
  const { type } = action;
  switch(type) {
    case DELETE_ARTICLE :
      articles = articles.filter(article => article.id !== action.payload.id);
      return articles
    case SORT_BY_SELECT_ARTICLE:
      const labels = action.payload.selectedOption.map(({value}) => value);
      if(!labels.length) return articles;
      return articles.filter(article => {
        return !!~labels.indexOf(article.title)
      })
  }

  return articlesState
}
