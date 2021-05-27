import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { viewLoan } from "../actions/loans";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ViewLoan = ({ viewLoan, history }) => {
  const [contact, setContact] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    viewLoan(contact, history);
    setContact("");
  };

  return (
    <div className="add-loan">
      <div className="add-loan-container">
        <h2 className="mb-1">
          Enter your contact no. to search for all the loans you applied to.
        </h2>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Contact No."
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-secondary px-4">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

ViewLoan.propTypes = {
  viewLoan: PropTypes.func.isRequired,
};

export default connect(null, { viewLoan })(withRouter(ViewLoan));
