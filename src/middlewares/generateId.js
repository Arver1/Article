import { ADD_COMMENT } from '../constants';

export default store => next => action => {
  const { type } = action;
  switch(type) {
    case ADD_COMMENT:
      const id = 'gen' + Math.random().toString().substr(2,12);
      action.payload.id = id;
      next({
        ...action,
        commentId: id
      });
  }
  next(action);
}
