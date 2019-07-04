/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import customMUIParameters from "./util/theme";
import jwtDecode from "jwt-decode";

//import from pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

//import from components
import Navbar from "./components/Navbar";
import AuthRoute from "./util/AuthRoute";

const theme = createMuiTheme(customMUIParameters);
let authenticated;
const token = localStorage.PaperApiToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    //if token expired ? then process the following code
    window.location.href = "/login";
    authenticated = false;
  } else {
    authenticated = true;
  }
}

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <AuthRoute exact path="/login" component={login} />
              <AuthRoute exact path="/signup" component={signup} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
