import {
  FETCHING,
  SUCCESS,
  FAILURE,
} from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

    case FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ""
      }

    case SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        error: ""
      }

    case FAILURE:
      console.log("action payload" ,action.payload)
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
