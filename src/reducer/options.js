import {articles as defaultArticles} from '../fixtures';
import { DELETE_OPTION} from "../constants";

const defaultOptionState =  defaultArticles.map((article) => ({value: article.title, label: article.title}));

export default (optionState = defaultOptionState, action) => {
  const { type } = action;
  switch(type) {
    case DELETE_OPTION:
      return optionState.filter((option) => option.value !== action.payload.title)
  }
  return optionState;
}
