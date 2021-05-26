import { VIEW_MARKS, MARKS_ERROR, ADD_MARKS } from "../actions/types";

const initialState = {
  user: null,
  users: [],
  loading: true,
  error: {},
};

export default function marks(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case VIEW_MARKS:
      return {
        ...state,
        users: payload,
        loading: false,
      };

    case ADD_MARKS:
      return {
        ...state,
        user: payload,
        loading: false,
      };

    case MARKS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        user: null,
      };

    default:
      return state;
  }
}
