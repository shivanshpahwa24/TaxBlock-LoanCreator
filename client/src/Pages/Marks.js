import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { addMarks } from "../actions/marks";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Marks = ({ addMarks, history }) => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    maths: "",
    physics: "",
    chemistry: "",
  });

  const { name, rollNo, maths, physics, chemistry } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addMarks(formData, history);
    setFormData({
      ...formData,
      name: "",
      rollNo: "",
      maths: "",
      physics: "",
      chemistry: "",
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
              placeholder="Name"
              name="name"
              onChange={onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Roll No."
              name="rollNo"
              value={rollNo}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Maths (Out of 100)"
              name="maths"
              value={maths}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Physics (Out of 100)"
              name="physics"
              value={physics}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Chemistry (Out of 100)"
              name="chemistry"
              value={chemistry}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-secondary px-4">
            Add Marks
          </button>
        </form>
      </div>
    </div>
  );
};

Marks.propTypes = {
  addMarks: PropTypes.func.isRequired,
};

export default connect(null, { addMarks })(withRouter(Marks));
