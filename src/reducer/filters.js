import {ADD_SELECT, DELETE_ARTICLE, UPDATE_RANGE} from "../constants";

const defaultFiltersState =  {
  selectedOption: [],
  from: null,
  to: null
};

export default (filtersState = defaultFiltersState, action) => {
  const { type } = action;

  switch(type) {
    case ADD_SELECT:
      return Object.assign({}, filtersState, {selectedOption: [...action.payload.titles]});
    case DELETE_ARTICLE:
      filtersState.selectedOption = filtersState.selectedOption.filter((option) => {
        return option !== action.payload.title
      });
      return filtersState;
    case UPDATE_RANGE:
      return Object.assign({}, filtersState,
        {
          from: action.payload.range.from,
          to: action.payload.range.to
        });
  }

  return filtersState;
}
