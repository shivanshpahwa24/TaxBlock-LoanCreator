import axios from "axios";
import { setAlert } from "./alert";
import { VIEW_MARKS, MARKS_ERROR, ADD_MARKS } from "./types";

//Get everybody's marks
export const getMarks = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/marks");

    dispatch({
      type: VIEW_MARKS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: MARKS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add marks for a new user
export const addMarks = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("/api/marks", formData, config);

    dispatch({
      type: ADD_MARKS,
      payload: res.data,
    });

    dispatch(setAlert("Marks Added", "success"));

    history.push("/leaderboard");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: MARKS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
