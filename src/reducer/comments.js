import { normalizedComments as defaultComments } from '../fixtures'
import { ADD_COMMENT } from "../constants";

const commentsMap = defaultComments.reduce((acc, comment) => {
  acc[comment.id] = comment;
  return acc
}, {});

export default (commentsState = commentsMap, action) => {
  const { type } = action;
  switch(type) {
    case 'ADD_COMMENT':
      const {user, text } = action.payload;
      return {
        ...commentsState,
        [action.commentId]: {
          id: action.commentId,
          user,
          text
        }
      };
  }
  return commentsState
}
