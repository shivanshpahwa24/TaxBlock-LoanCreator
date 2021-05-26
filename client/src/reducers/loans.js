import { VIEW_LOANS, LOAN_ERROR, ADD_LOAN } from "../actions/types";

const initialState = {
  loan: null,
  loans: [],
  loading: true,
  error: {},
};

export default function loans(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case VIEW_LOANS:
      return {
        ...state,
        loans: payload,
        loading: false,
      };

    case ADD_LOAN:
      return {
        ...state,
        loan: payload,
        loading: false,
      };

    case LOAN_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        loan: null,
      };

    default:
      return state;
  }
}
