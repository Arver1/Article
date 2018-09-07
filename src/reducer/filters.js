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
      return Object.assign({}, filtersState, {selectedOption: [...action.payload.titles]});
    case UPDATE_RANGE:
      return Object.assign({}, filtersState,
        {
          from: action.payload.range.from,
          to: action.payload.range.to
        });
  }

  return filtersState;
}
