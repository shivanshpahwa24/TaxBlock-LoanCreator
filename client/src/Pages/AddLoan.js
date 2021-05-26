import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { addLoan } from "../actions/loans";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AddLoan = ({ addLoan, history }) => {
  const [formData, setFormData] = useState({
    contact: "",
    name: "",
    email: "",
    address: "",
    amount: "",
    start: "",
    expiry: "",
  });

  const { contact, name, email, address, amount, start, expiry } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addLoan(formData, history);
    setFormData({
      ...formData,
      contact: "",
      name: "",
      email: "",
      address: "",
      amount: "",
      start: "",
      expiry: "",
    });
  };

  return (
    <div className="marks">
      <div className="marks-container">
        <h2 className="mb-1">Enter Your Information</h2>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Applicant Name"
              name="name"
              onChange={onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Contact No."
              name="contact"
              value={contact}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Enter your address"
              name="address"
              value={address}
              rows={2}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Loan Amount (in ₹)"
              name="amount"
              value={amount}
              onChange={onChange}
            />
          </div>
          <div class="input-group form-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Start Date</span>
            </div>
            <input
              type="date"
              className="form-control flex-shrink-1"
              id="start"
              name="start"
              value={start}
              onChange={onChange}
            />
          </div>
          <div class="input-group form-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Expiry Date</span>
            </div>
            <input
              type="date"
              className="form-control"
              id="expiry"
              name="expiry"
              value={expiry}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-secondary px-4">
            Add Loan Application
          </button>
        </form>
      </div>
    </div>
  );
};

AddLoan.propTypes = {
  addLoan: PropTypes.func.isRequired,
};

export default connect(null, { addLoan })(withRouter(AddLoan));
