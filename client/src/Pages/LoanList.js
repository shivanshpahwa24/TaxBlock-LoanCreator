import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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

const LoanList = ({ loans: { loans } }) => {
  return (
    <div className="loan-list">
      <div className="loan-list-container">
        <MaterialTable
          icons={tableIcons}
          columns={[
            {
              field: "name",
              title: "Applicant Name",
              cellStyle: {
                color: "#575757",
              },
              headerStyle: {
                fontSize: "1.1rem",
                fontWeight: "bold",
              },
            },
            {
              field: "contact",
              title: "Contact No.",
              cellStyle: {
                color: "#575757",
              },
              headerStyle: {
                fontSize: "1.1rem",
                fontWeight: "bold",
              },
            },
            {
              field: "email",
              title: "Email",
              cellStyle: {
                color: "#575757",
              },
              headerStyle: {
                fontSize: "1.1rem",
                fontWeight: "bold",
              },
            },
            {
              field: "address",
              title: "Address",
              cellStyle: {
                color: "#575757",
              },
              headerStyle: {
                fontSize: "1.1rem",
                fontWeight: "bold",
              },
            },
            {
              field: "amount",
              title: "Loan Amount",
              cellStyle: {
                color: "#575757",
              },
              headerStyle: {
                fontSize: "1.1rem",
                fontWeight: "bold",
              },
            },
            {
              field: "start",
              title: "Start Date",
              cellStyle: {
                color: "#575757",
              },
              headerStyle: {
                fontSize: "1.1rem",
                fontWeight: "bold",
              },
            },
            {
              field: "expiry",
              title: "Expiry Date",

              cellStyle: {
                color: "#575757",
              },
              headerStyle: {
                fontSize: "1.1rem",
                fontWeight: "bold",
              },
            },
            {
              field: "EMI",
              title: "EMI",

              cellStyle: {
                color: "#575757",
              },
              headerStyle: {
                fontSize: "1.1rem",
                fontWeight: "bold",
              },
            },
          ]}
          data={loans}
          title={
            <h4
              style={{
                fontSize: "1.3rem",
                marginTop: "1rem",
                color: "#343a40",
                fontWeight: "bold",
              }}
            >
              LoanList
            </h4>
          }
          options={{
            search: true,
            sorting: true,
            paging: false,
            maxBodyHeight: 500,
          }}
        />
      </div>
    </div>
  );
};

LoanList.propTypes = {
  loans: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ loans: state.loans });

export default connect(mapStateToProps)(LoanList);
