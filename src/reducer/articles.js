import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, START, SUCCESS } from "../constants";
import { OrderedMap, Map, Record } from 'immutable'
import { arrToMap } from "../util";

const ArticleRecord = Record({
  text: null,
  title: null,
  id: null,
  comments: []
});

const ReducerState = Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({})
});

const defaultState = new ReducerState();

export default (articlesState = defaultState, action) => {
  const { type, response }  = action;
  switch(type) {
    case DELETE_ARTICLE :
      return articlesState.deleteIn(['entities'], action.payload.id);

    case ADD_COMMENT :
      return articlesState.updateIn(
        ['entities', action.payload.articleId, 'comments'],
          comments => comments.concat(action.commentId));

    case LOAD_ALL_ARTICLES + START:
      return articlesState.set('loading', true);

    case LOAD_ALL_ARTICLES + SUCCESS:
      return articlesState
        .set('entities', arrToMap(response, ArticleRecord))
        .set('loading', false)
        .set('loaded', true)
  }

  return articlesState
}
