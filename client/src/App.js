import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./Pages/Landing";
import ViewLoan from "./Pages/ViewLoan";
import LoanList from "./Pages/LoanList";
import AddLoan from "./Pages/AddLoan";
import Alert from "./components/Alert";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <>
            <Navbar />
            <div className="alert-container">
              <Alert />
            </div>
            <Route exact path="/addLoan" component={AddLoan} />
            <Route exact path="/viewLoans" component={ViewLoan} />
            <Route exact path="/loanList" component={LoanList} />
          </>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
