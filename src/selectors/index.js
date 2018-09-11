import {  createSelector } from 'reselect';

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;
const commentsGetter = state => state.comments;
const idGetter = (state, props) => props.id;
export const articleFilterSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
  const articlesArray = Object.values(articles);
  const {from, to, selectedOption } = filters;
  if(!selectedOption.length) {
    if(!from) {
      return {
        articles: articlesArray
      }
    }
    if(!to) {
      return {
        articles: articlesArray.filter(({date}) => {
          const currentTime =  new Date(date).getTime();
          if (currentTime >= from) return true;
        })
      }
    } else {
      return {
        articles: articlesArray.filter(({date}) => {
          const currentTime =  new Date(date).getTime();
          if (currentTime >= from && currentTime <= to) return true;
        })
      }
    }
  }
  return {
    articles: articlesArray.filter(({title, date}) => {
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

export const CommentFilterSelector = () => createSelector(commentsGetter, idGetter, (comments, id) => {
  return {
    comment: comments[id]
  }
});
