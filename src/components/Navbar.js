/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from "react-router-dom";

//material imports
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Button from "@material-ui/core/Button";

export class Navbar extends Component {
  render() {
    return (
      <AppBar color="default">
        <ToolBar className="nav-container">
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Signup
          </Button>
        </ToolBar>
      </AppBar>
    );
  }
}

export default Navbar;
