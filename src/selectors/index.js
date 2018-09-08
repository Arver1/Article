import { createSelector } from 'reselect';

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;

export const ArticleFilterSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
  const {from, to, selectedOption } = filters;
  if(!selectedOption.length) {
    if(!from) {
      return {
        articles
      }
    }
    if(!to) {
      return {
        articles: articles.filter(({date}) => {
          const currentTime =  new Date(date).getTime();
          if (currentTime >= from) return true;
        })
      }
    } else {
      return {
        articles: articles.filter(({date}) => {
          const currentTime =  new Date(date).getTime();
          if (currentTime >= from && currentTime <= to) return true;
        })
      }
    }
  }
  return {
    articles: articles.filter(({title, date}) => {
      if(!!~selectedOption.indexOf(title)){
        const currentTime =  new Date(date).getTime();
        if(!from) return true;
        else {
          if(!to) {
            if (currentTime >= from) return true;
          }
          else {
            if (currentTime >= from && currentTime <= to) return true;
          }
        }
      }
    })
  }
});
