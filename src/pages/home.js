/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Scream from "../components/Scream";
import Profile from "../components/Profile";

export class home extends Component {
  state = {
    screams: null
  };

  componentDidMount() {
    axios
      .get("/screams")
      .then(res => {
        this.setState({ screams: res.data });
      })
      .catch(err => console.log);
  }
  render() {
    let screamsFromApi = this.state.screams
      ? this.state.screams.map(scream => (
          <Scream key={scream.screamId} scream={scream} />
        ))
      : "";

    return (
      <Grid container spacing={3}>
        <Grid item sm={8} xs={12}>
          {screamsFromApi}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

export default home;
