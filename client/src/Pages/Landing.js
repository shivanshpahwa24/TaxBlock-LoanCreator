import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-container">
        <header className="landing-header">
          <h1>LoanCreator</h1>
        </header>
        <div className="landing-main">
          <Link to="/addLoan" className="btn1">
            Create New Loan
          </Link>
          <Link to="/viewLoans" className="btn1">
            View Your Loans
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
