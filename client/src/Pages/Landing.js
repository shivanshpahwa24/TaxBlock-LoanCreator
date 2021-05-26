import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-container">
        <header className="landing-header">
          <h1>ReportKeeper</h1>
        </header>
        <div className="landing-main">
          <Link to="/marks" className="btn1">
            Enter New Record
          </Link>
          <Link to="/leaderboard" className="btn1">
            View Leaderboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
