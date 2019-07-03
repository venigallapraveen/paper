import React, { Component } from "react";

//material imports
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Button from "@material-ui/core/Button";

export class Navbar extends Component {
  render() {
    return (
      <AppBar color="default">
        <ToolBar>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Signup</Button>
        </ToolBar>
      </AppBar>
    );
  }
}

export default Navbar;
