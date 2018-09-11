import {ADD_COMMENT, UPDATE_COMMENTS_ARTICLE} from '../constants';

export default store => next => action => {
  const { type } = action;
  switch(type) {
    case ADD_COMMENT:
      const id = 'gen' + Math.random().toString().substr(2,12);
      action.payload.id = id;
      next(action);
      next({
        type: UPDATE_COMMENTS_ARTICLE,
        payload: {
          id: action.payload.articleId,
          commentId: id
        }
      });
  }
}
