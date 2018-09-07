import { ADD_SELECT, UPDATE_RANGE } from "../constants";

const defaultFiltersState =  {
  selectedOption: [],
  from: null,
  to: null
};

export default (filtersState = defaultFiltersState, action) => {
  const { type } = action;

  switch(type) {
    case ADD_SELECT:
      return {
        selectedOption: [...action.payload.titles],
        from: null,
        to: null
      };
    case UPDATE_RANGE:
      return {
        selectedOption: [],
        from: action.payload.range.from,
        to: action.payload.range.to
      };
  }

  return filtersState;
}
