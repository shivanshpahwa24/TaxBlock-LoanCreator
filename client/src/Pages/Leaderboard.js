import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMarks } from "../actions/marks";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Search from "@material-ui/icons/Search";

const tableIcons = {
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
};

const Leaderboard = ({ getMarks, marks: { users } }) => {
  useEffect(() => {
    //So that all the data is already filled as soon as the page loads
    getMarks();
  }, [getMarks]);
  return (
    <div className="leaderboard">
      <div className="leaderboard-container">
        <MaterialTable
          icons={tableIcons}
          columns={[
            {
              field: "name",
              title: "Name",
              cellStyle: {
                color: "#575757",
              },
              headerStyle: {
                fontSize: "1.1rem",
                fontWeight: "bold",
              },
            },
            {
              field: "rollNo",
              title: "Roll No.",
              cellStyle: {
                color: "#575757",
              },
              headerStyle: {
                fontSize: "1.1rem",
                fontWeight: "bold",
              },
            },
            {
              field: "maths",
              title: "Maths",
              cellStyle: {
                color: "#575757",
              },
              headerStyle: {
                fontSize: "1.1rem",
                fontWeight: "bold",
              },
            },
            {
              field: "physics",
              title: "Physics",
              cellStyle: {
                color: "#575757",
              },
              headerStyle: {
                fontSize: "1.1rem",
                fontWeight: "bold",
              },
            },
            {
              field: "chemistry",
              title: "Chemistry",
              cellStyle: {
                color: "#575757",
              },
              headerStyle: {
                fontSize: "1.1rem",
                fontWeight: "bold",
              },
            },
            {
              field: "total",
              title: "Total",
              cellStyle: {
                color: "#575757",
              },
              headerStyle: {
                fontSize: "1.1rem",
                fontWeight: "bold",
              },
            },
            {
              field: "percentage",
              title: "Percentage",
              defaultSort: "desc",
              cellStyle: {
                color: "#575757",
              },
              headerStyle: {
                fontSize: "1.1rem",
                fontWeight: "bold",
              },
            },
          ]}
          data={users}
          title={
            <h4
              style={{
                fontSize: "1.3rem",
                marginTop: "1rem",
                color: "#343a40",
                fontWeight: "bold",
              }}
            >
              Leaderboard
            </h4>
          }
          options={{
            search: true,
            sorting: true,
            paging: false,
            maxBodyHeight: 400,
          }}
        />
      </div>
    </div>
  );
};

Leaderboard.propTypes = {
  getMarks: PropTypes.func.isRequired,
  marks: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ marks: state.marks });

export default connect(mapStateToProps, { getMarks })(Leaderboard);
