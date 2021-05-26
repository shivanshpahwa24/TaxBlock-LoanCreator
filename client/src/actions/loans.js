import axios from "axios";
import { setAlert } from "./alert";
import { VIEW_LOANS, LOAN_ERROR, ADD_LOAN } from "./types";

//Get everybody's loans
export const getLoans = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/loans");

    dispatch({
      type: VIEW_LOANS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: LOAN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add new loan
export const addLoans = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/loans", formData, config);

    dispatch({
      type: ADD_LOAN,
      payload: res.data,
    });

    dispatch(setAlert("Loan Information Added", "success"));

    history.push("/leaderboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOAN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
